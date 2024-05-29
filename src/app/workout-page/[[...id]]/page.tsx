import { getUserProgress, getWorkoutById, updateUserProgress } from "@/api/api";
import ExerciseBlock from "@/components/exerciseBlock";
import Header from "@/components/header";
import ProgressModal from "@/components/progressModal";
import Button from "@/components/shared/button";
import HeadingFour from "@/components/shared/headingFour";
import PrimaryHeading from "@/components/shared/primaryHeading";
import WorkoutBreadCrumbs from "@/components/workoutBreadCrumbs";
import WorkoutVideo from "@/components/workoutVideo";
import WithAuth from "@/hoc/WithAuth";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import Link from "next/link";
import React, { useRef } from "react";

const WorkoutPage = async ({ params }) => {

  const workout = await getWorkoutById({ id: params.id[1] });

  const progress = await getUserProgress({
    uId: cookies().get("uid").value,
    courseId: params.id[0],
    workoutId: params.id[1],
  });
  const updateProgress = async (data) => {
    "use server"
    if (!workout.exercises) {
      updateUserProgress({
        uId: cookies().get("uid").value,
        courseId: params.id[0],
        workoutId: params.id[1],
        progress: {done: true},
      })
    }
    let formData = []
    const formValue = Object.fromEntries(data)
    for (const key in formValue) {
     if(key.includes("progress")) formData.push(formValue[key])
    }
    let progressValue = {
      done: false,
      exercises: [],
    }
    Object.keys(formData).forEach((key, index) => {
      progressValue = {
        ...progressValue,
        exercises: [
          ...progressValue.exercises,
          {
            ...workout.exercises[index],
            progress: +formData[key],
          }
        ],
        done: +formData[key] === progress?.exercises[index].quantity

      }

    })
    updateUserProgress({
            uId: cookies().get("uid").value,
      courseId: params.id[0],
      workoutId: params.id[1],
      progress: progressValue,
    })

    revalidateTag("progress")
  }
  return (
    <>
      <Header />
      <main className="pl-left pr-right">
        <PrimaryHeading>{workout.name}</PrimaryHeading>
        <WorkoutBreadCrumbs />
        <WorkoutVideo video={workout.video} />
        <div className="p-10 rounded shadow-base">
          <HeadingFour>Упражнения тренировки:</HeadingFour>
          <div className="grid grid-cols-3 justify-between gap-5 mt-5">
            {workout.exercises
              ? workout.exercises.map((ex, index) => (
                <ExerciseBlock
                  key={index}
                  progress={
                    (progress?.exercises[index].progress / progress?.exercises[index].quantity) *
                    100
                  }
                  title={ex.name}
                />
              ))
              : "Упражнений нет"}
          </div>
          <div className="w-[320px] mt-10">
            {workout.exercises ? <Link href={`/workout-page/${params.id[0]}/${params.id[1]}/progress`}>
              Заполнить свой прогресс</Link> : 
              <form action={updateProgress}>
                <Button type="submit">Выполнено</Button>
                </form>
                }
          </div>
        </div>
        {params.id[2] === "progress" && <ProgressModal action={updateProgress} exercise={workout.exercises} />}
      </main>
    </>
  );
};

export default WithAuth(WorkoutPage);
