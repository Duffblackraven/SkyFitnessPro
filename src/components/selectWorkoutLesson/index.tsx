"use client";
import React, { useState } from "react";

const SelectWorkoutLesson = ({ id, name, done }: {id: string, name: string, done:boolean}) => {
  const [click, setClick] = useState(false);
  const getIdWorkout = (id: string) => {
    setClick((prev) => !prev);
    localStorage.setItem("idWorkout", id);
  };

  return (
    <div
      onClick={() => getIdWorkout(id)}
      className={`inline-flex items-center ${click && "bg-light-grey"}`}
    >
      <label
        className="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor={name}
        data-ripple-dark="true"
      >
        <input
          id={name}
          type="checkbox"
          disabled
          checked={done ? true : false}
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
        htmlFor={name}
      >
        {name}
      </label>
    </div>
  );
};

export default SelectWorkoutLesson;
