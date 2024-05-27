
import { getUserProgress, getWorkoutById } from "@/api/api";
import ExerciseBlock from "@/components/exerciseBlock";
import Header from "@/components/header";
import Button from "@/components/shared/button";
import HeadingFour from "@/components/shared/headingFour";
import PrimaryHeading from "@/components/shared/primaryHeading";
import WorkoutBreadCrumbs from "@/components/workoutBreadCrumbs";
import WorkoutVideo from "@/components/workoutVideo";
import { cookies } from "next/headers";
import React, { useRef } from "react";

const WorkoutPage = async ({ params }) => {
  const workout = await getWorkoutById({ id: params.id[1] })
  console.log(params)
  const progress = await getUserProgress({ uId: cookies().get("uid").value , courseId: params.id[0], workoutId: params.id[1]})
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
            {workout.exercises ? workout.exercises.map((ex, index) => <ExerciseBlock progress={progress[index].progress/progress[index].quantity} title={ex.name} />) : "Упражнений нет"}
          </div>
          <div className="w-[320px] mt-10">

          </div>
        </div>
      </main>
    </>
  );
};

export default WorkoutPage;
