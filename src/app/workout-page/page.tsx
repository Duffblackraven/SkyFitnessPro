"use client";
import ExerciseBlock from "@/components/exerciseBlock";
import Header from "@/components/header";
import Button from "@/components/shared/button";
import HeadingFour from "@/components/shared/headingFour";
import PrimaryHeading from "@/components/shared/primaryHeading";
import WorkoutBreadCrumbs from "@/components/workoutBreadCrumbs";
import WorkoutVideo from "@/components/workoutVideo";
import React, { useRef } from "react";

const WorkoutPage = () => {

  const a = () => {};
  return (
    <>
      <Header />
      <main className="pl-left pr-right">
        <PrimaryHeading>Йога</PrimaryHeading>
        <WorkoutBreadCrumbs />
        <WorkoutVideo />
        <div className="p-10 rounded shadow-base">
          <HeadingFour>Упражнения тренировки 2</HeadingFour>
          <div className="grid grid-cols-3 justify-between gap-5 mt-5">
            <ExerciseBlock />
            <ExerciseBlock />
            <ExerciseBlock />
            <ExerciseBlock />
            <ExerciseBlock />
          </div>
          <div className="w-[320px] mt-10">
            <Button onClick={a} type="button" green={true}>
              Заполнить свой прогресс
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default WorkoutPage;
