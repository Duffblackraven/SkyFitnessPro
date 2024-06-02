import { transormData } from "@/helpers/transformData";
import { cookies } from "next/headers";

const API_URL =
  "https://skyfitnesspro-4eb46-default-rtdb.europe-west1.firebasedatabase.app";

//получение всех курсов на главной странице

export async function getCourses() {
  try {
    const response = await fetch(`${API_URL}/courses.json`);
    if (!response.ok) {
      throw new Error("Заглушечка-хуеюшечка");
    }
    const data = await response.json();
    console.log(data, "результат внутри апи");
    return transormData(data);
  } catch (error) {
    throw error;
  }
}
// функция для получения всех тренировок для отрисовки отдельной страницы тренировки, или для
//модалки в которой перечислены тренировки.
export async function getWorkouts() {
  try {
    const response = await fetch(`${API_URL}/workouts.json`);
    if (!response.ok) {
      throw new Error("Заглушечка-хуеюшечка");
    }
    const data = await response.json();
    return transormData(data);
  } catch (error) {
    throw error;
  }
}
//функция получить курс по айди
export async function getCourseById({ id }) {
  console.log(id, "отличчали между собой");
  try {
    const response = await fetch(`${API_URL}/courses/${id}.json`);
    console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

//функция получения воркаута по айди
export async function getWorkoutById({ id }) {
  try {
    const response = await fetch(`${API_URL}/workouts/${id}.json`);
    if (!response.ok) {
      throw new Error("Заглушечка-хуеюшечка");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserWorkoutById({ uId, workoutId, courseId }) {
  try {
    const response = await fetch(`${API_URL}/users/${uId}/${courseId}/${workoutId}.json`);
    if (!response.ok) {
      throw new Error("Заглушечка-хуеюшечка");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addCourse({ courseId, userId }) {
  if (!userId) {
    throw new Error("not authorized");
  }

  try {
    const { workouts } = await getCourseById({ id: courseId });

    const workoutsData = await Promise.all(
      workouts.map((workoutId) => getWorkoutById({ id: workoutId }))
    );

    const progressObj = workouts.reduce((acc, workoutId, index) => {
      const exercises = workoutsData[index].exercises;
      if (!exercises) {
        acc[workoutId] = { done: false };
      } else {
        acc[workoutId] = exercises.reduce(
          (exerciseAcc, exercise, exerciseIndex) => {
            exerciseAcc.exercises[exerciseIndex] = {
              name: exercise.name,
              quantity: exercise.quantity,
              progress: 0,
            };
            return exerciseAcc;
          },
          {done:false,
            exercises: {},
          }
        );
      }
      return acc;
    }, {progress: 0});

    const response = await fetch(
      `${API_URL}/users/${userId}/${courseId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(progressObj),
      }
    );

    if (!response.ok) {
      throw new Error("Не получилось обновить данные");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function getUserCourses({ userId }) {
  if (!userId) {
    throw new Error("Нет");
  }
  try {
    console.log(userId);
    const response = await fetch(`${API_URL}/users/${userId}.json`);
    if (!response.ok) {
      throw new Error("Не получилось загрузить курсы");
    }

    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCourseWorkouts({ id }) {
  console.log(id);
  try {
    const { workouts } = await getCourseById({ id });

    const workoutData = await Promise.all(
      workouts.map((workout) => getUserWorkoutById({ workoutId: workout, uId: cookies().get("uid")?.value, courseId: id }))
    ); console.log(workoutData, "typaya zalupa blyta hyli ti ne rabotaesh to blyat a")
    const workoutNames = await Promise.all(
      workouts.map((workout) => getWorkoutById({ id: workout }))
    );
    const workoutList = workouts.reduce((acc, workout, index) => {
      return [
        ...acc,
        {
          id: workout,
          name: workoutNames[index]?.name,
          done: workoutData[index]?.done
        },
      ];
    }, []);
    return workoutList;
  } catch (error) {
    throw error;
  }
}

export const getUserProgress = async ({ uId, courseId, workoutId }) => {
  console.log(uId, courseId, workoutId);
  try {
    const response = await fetch(
      `${API_URL}/users/${uId}/${courseId}/${workoutId}.json`,
      {next: {
        tags: ["progress"]
      }}
    );
    if (!response.ok) {
      throw new Error("Заглушечка-хуюшечка");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error
  }
};


export const updateUserProgress = async ({ uId, courseId, workoutId, progress }) => {
  try {
    const response = await fetch(`${API_URL}/users/${uId}/${courseId}/${workoutId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(progress)
      }
    )
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    await updateCourseProgress({courseId, uId})
    return await response.json();
  } catch (error) {

    throw error
  }
}


export const updateCourseProgress = async ({ courseId, uId }) => {
  try {
    const data = await getCourseWorkouts({ id: courseId })
    console.log(data, "залупа номер одиен")
    const progress = data.reduce((acc, elem) => elem.done ? acc + 1 : acc, 0) / data.length * 100
    console.log(progress, "ЗАЛУПА ЕБАНАЯ")
    const response = await fetch(`${API_URL}/users/${uId}/${courseId}/progress.json`,
      {
        method: "PUT",
        body: JSON.stringify(progress)
      }
    )
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    throw error
  }
}

export async function deleteCourse({ courseId, userId }) {
  if (!userId) {
    throw new Error("not authorized");
  }

  try {
    const response = await fetch(
      `${API_URL}/users/${userId}/${courseId}.json`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Не получилось удалить курс");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}