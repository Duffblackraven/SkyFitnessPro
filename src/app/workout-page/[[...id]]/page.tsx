import { getUserProgress, getWorkoutById, updateUserProgress } from "@/api/api";
import ExerciseBlock from "@/components/exerciseBlock";
import Header from "@/components/header";
import ModalSuccess from "@/components/modalSuccess";
import ProgressModal from "@/components/progressModal";
import Button from "@/components/shared/button";
import HeadingFour from "@/components/shared/headingFour";
import PrimaryHeading from "@/components/shared/primaryHeading";
import WorkoutBreadCrumbs from "@/components/workoutBreadCrumbs";
import WorkoutVideo from "@/components/workoutVideo";
import WithAuth from "@/hoc/WithAuth";
import { exerciseType, workoutType } from "@/types/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useRef } from "react";

const WorkoutPage = async ({ params }: {params: {id: string}}) => {

  const workout: workoutType = await getWorkoutById({ id: params.id[1] });
  const uId = cookies().get("uid")?.value
  if(!uId){
    redirect("/signin")
  }
  const progress = await getUserProgress({
    uId,
    courseId: params.id[0],
    workoutId: params.id[1],
  });
  const updateProgress = async (data: FormData) => {
    "use server"
    if (!workout.exercises) {
      updateUserProgress({
        uId,
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
    let progressValue: {done: boolean, exercises: {name: string, progress: number, quantity: number}[]} = {
      done: false,
      exercises: [],
    }
    Object.keys(formData).forEach((key: string, index:number) => {
      progressValue = {
        ...progressValue,
        exercises: [
          ...progressValue.exercises,
          {
            ...workout.exercises![index],
            progress: +formData[key],
          }
        ],
        done: +formData[key] === progress?.exercises[index].quantity

      }

    })
    updateUserProgress({
            uId,
      courseId: params.id[0],
      workoutId: params.id[1],
      progress: progressValue,
    })

    revalidateTag("progress")
    redirect(`/workout-page/${params.id[0]}/${params.id[1]}/modalSuccess`);
  }
  const userName = cookies().get("email")?.value;
  if(!userName){
    redirect("/signin")
  }
  return (
    <div className="relative h-screen">
    <div className={`${params.id[2] === "progress" || params.id[2] === "modalSuccess" ? "fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50" : ""}`}></div>
      <Header userName={userName}/>
      <main className="pl-left pr-right">
        <PrimaryHeading>{workout.name}</PrimaryHeading>
        <WorkoutBreadCrumbs />
        <WorkoutVideo video={workout.video} />
        <div className="p-10 rounded shadow-base text-black">
          <HeadingFour>Упражнения тренировки:</HeadingFour>
          <div className="grid grid-cols-3 justify-between gap-5 mt-5 ">
            {workout.exercises
              ? workout.exercises.map((ex, index: number) => (
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
          <div className="w-[320px] mt-10 text-black">
            {workout.exercises ? <Link className="bg-bright-green hover:bg-bright-green-hov text-black text-sm py-4 px-[26px] rounded" href={`/workout-page/${params.id[0]}/${params.id[1]}/progress`}>
              Заполнить свой прогресс</Link> : 
              <form action={updateProgress}>
                <Button green type="submit">Выполнено</Button>
              </form>
                }
          </div>
        </div>
        {params.id[2] === "progress" && <ProgressModal action={updateProgress} exercise={workout.exercises} />}
        {params.id[2] === "modalSuccess" && <ModalSuccess paramOne={params.id[0]} paramTwo={params.id[1]} />}
      </main>
    </div>
  );
};

export default WithAuth(WorkoutPage);
