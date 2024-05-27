import React from "react";

type ProgressBarProps = {
  name: string;
  id: string;
  min: number;
  max: number;
  value: number;
  title: string;
};

const ProgressBar = ({
  name,
  id,
  min,
  max,
  value,
  title,
}: ProgressBarProps) => {
  const progress = value * 3;
  return (
    <>
      <p className="text-sm mb-2.5">{title}</p>
      <input
        className=" w-full bg-input hidden appearance-none rounded-lg h-2"
        type="range"
        name={name}
        id={id}
        min={min}
        max={max}
        value={value}
        disabled
      />
      <div className="rounded-md w-[300px] overflow-hidden h-2 bg-[#F7F7F7]">
        <div
          style={{ width: progress + "px" }}
          className="bg-cyan-500 h-full"
        ></div>
      </div>
    </>
  );
};
// полоска прогресса, принимает минимум - максимум. текущее значение (велью), тайтл

export default ProgressBar;
