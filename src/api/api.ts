import { transormData } from "@/helpers/transformData";
import { cookies } from "next/headers";

const API_URL =
  "https://skyfitnesspro-4eb46-default-rtdb.europe-west1.firebasedatabase.app";

//получение всех курсов на главной странице

export async function getCourses() {
  try {
    const response = await fetch(`${API_URL}/courses.json`);
    if (!response.ok) {
      throw new Error("Ошибка");
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
      throw new Error("Ошибка");
    }
    const data = await response.json();
    return transormData(data);
  } catch (error) {
    throw error;
  }
}
//функция получить курс по айди
export async function getCourseById({ id }: { id: string }) {
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
export async function getWorkoutById({ id }: { id: string }) {
  try {
    const response = await fetch(`${API_URL}/workouts/${id}.json`);
    if (!response.ok) {
      throw new Error("Ошибка");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserWorkoutById({ uId, workoutId, courseId }: { uId: string, workoutId: string, courseId: string }) {
  try {
    const response = await fetch(`${API_URL}/users/${uId}/${courseId}/${workoutId}.json`);
    if (!response.ok) {
      throw new Error("Ошибка");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addCourse({ courseId, userId }: { courseId: string, userId: string }) {
  if (!userId) {
    throw new Error("Ошибка авторизации");
  }

  try {
    const { workouts } = await getCourseById({ id: courseId });

    const workoutsData = await Promise.all(
      workouts.map((workoutId: string) => getWorkoutById({ id: workoutId }))
    );
    type exerciseType = {
      name: string,
      quantity: number,
      progress: number,
    }
    type accType = {

      [key: string]: {
        done: boolean,
        exercises: exerciseType[]

      }
    }

    const progressObj = workouts.reduce((acc: { progress: number } | accType, workoutId: string, index: number) => {
      const exercises = workoutsData[index].exercises;
      if (!exercises) {
        acc[workoutId] = { done: false };
      } else {
        acc[workoutId] = exercises.reduce(
          (exerciseAcc: { done: boolean, exercises: exerciseType[] }, exercise: exerciseType, exerciseIndex: number) => {
            exerciseAcc.exercises[exerciseIndex] = {
              name: exercise.name,
              quantity: exercise.quantity,
              progress: 0,
            };
            return exerciseAcc;
          },
          {
            done: false,
            exercises: {},
          }
        );
      }
      return acc;
    }, { progress: 0 });

    const response = await fetch(
      `${API_URL}/users/${userId}/${courseId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(progressObj),
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка обновления данных");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function getUserCourses({ userId }: { userId: string }) {
  if (!userId) {
    throw new Error("Нет");
  }
  try {
    console.log(userId);
    const response = await fetch(`${API_URL}/users/${userId}.json`);
    if (!response.ok) {
      throw new Error("Ошибка загрузки курсов");
    }

    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {
    throw error;
  }
}
type workoutType = {
  id: string,
  name: string,
  done: boolean,
}
export async function getCourseWorkouts({ id }: { id: string }) {

  try {
    const { workouts } = await getCourseById({ id });

    const workoutData = await Promise.all(
      workouts.map((workout: string) => getUserWorkoutById({ workoutId: workout, uId: cookies().get("uid")?.value || "", courseId: id }))
    ); console.log(workoutData, "Ошибка, попробуйте снова")
    const workoutNames = await Promise.all(
      workouts.map((workout: string) => getWorkoutById({ id: workout }))
    );
    const workoutList = workouts.reduce((acc: workoutType[], workout: string, index: number) => {
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

export const getUserProgress = async ({ uId, courseId, workoutId }: { uId: string, courseId: string, workoutId: string }) => {
  console.log(uId, courseId, workoutId);
  try {
    const response = await fetch(
      `${API_URL}/users/${uId}/${courseId}/${workoutId}.json`,
      {
        next: {
          tags: ["progress"]
        }
      }
    );
    if (!response.ok) {
      throw new Error("Ошибка");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error
  }
};


export const updateUserProgress = async ({ uId, courseId, workoutId, progress }: { uId: string, courseId: string, workoutId: string, progress: { done: boolean } }) => {
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
    await updateCourseProgress({ courseId, uId })
    return await response.json();
  } catch (error) {

    throw error
  }
}


export const updateCourseProgress = async ({ courseId, uId }: { uId: string, courseId: string }) => {
  try {
    const data = await getCourseWorkouts({ id: courseId })
    console.log(data, "курсы")
    const progress = data.reduce((acc: number, elem: { done: boolean }) => elem.done ? acc + 1 : acc, 0) / data.length * 100
    console.log(progress, "прогресс")
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

export async function deleteCourse({ courseId, uId }: { uId: string, courseId: string }) {
  if (!uId) {
    throw new Error("Ошибка авторизации");
  }

  try {
    const response = await fetch(
      `${API_URL}/users/${uId}/${courseId}.json`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка удаления курса");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}