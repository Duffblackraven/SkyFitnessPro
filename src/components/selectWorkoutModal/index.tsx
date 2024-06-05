import React from "react";
import HeadingFour from "../shared/headingFour";
import { getCourseWorkouts } from "@/api/api";
import SelectWorkoutLesson from "../selectWorkoutLesson";
import SelectWorkoutBtn from "../selectWorkoutBtn";

const SelectWorkoutModal = async ({ id }: {id: string}) => {
  const workoutList: {id: string, name: string, done:boolean}[] = await getCourseWorkouts({ id });

  return (
    <section className="flex items-center justify-center h-screen text-black">
      <div className="bg-white rounded relative shadow-base w-[460px] p-10">
        <HeadingFour>Выберите тренировку</HeadingFour>
        <div className="grid">
          {workoutList.map((elem) => 
            <SelectWorkoutLesson done={elem.done} key={elem.id} id={elem.id} name={elem.name} />
          )}
          <SelectWorkoutBtn id={id} />
        </div>
      </div>
    </section>
  );
};

export default SelectWorkoutModal;
