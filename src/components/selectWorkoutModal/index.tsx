import React from "react";
import HeadingFour from "../shared/headingFour";
import { getCourseWorkouts } from "@/api/api";
import Link from "next/link";

const SelectWorkoutModal = async ({ id }) => {
  const workoutList = await getCourseWorkouts({ id });

  return (
    <section className="flex items-center justify-center h-screen ">
      <div className="bg-white rounded relative shadow-base w-[460px] p-10">
        <HeadingFour>Выберите тренировку</HeadingFour>
        <div className="grid">
          {workoutList.map((elem) => (
            <div className="inline-flex items-center" key={elem.id}>
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor={elem.name}
                data-ripple-dark="true"
              >
                <input
                  id={elem.name}
                  type="checkbox"
                  
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity  checked:bg-bright-green checked:before:bg-bright-green"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg className="w-3.5 h-3.5 fill-white">
                    <use xlinkHref="/img/sprite.svg#icon-checked" />
                  </svg>
                </span>
              </label>
              <label
                className="text-min w-full border-b-2 pb-[10px] mt-[10px] cursor-pointer select-none"
                htmlFor={elem.name}
              >
                {elem.name}
              </label>
            </div>
          ))}
          {/* <Link className="" href={`/workout-page/${id}/${elem.id}}>Начать</Link> */}
        </div>
      </div>
    </section>
  );
};

export default SelectWorkoutModal;
