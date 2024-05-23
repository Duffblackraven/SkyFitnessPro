import React from "react";

type ProgressBarProps = {
  name: string;
  id: string;
  min: number;
  max: number;
  value: number,
  title: string,
};

const ProgressBar = ({ name, id, min, max, value, title } :ProgressBarProps) => {
  return (
    <>
      <p className="text-sm mb-2.5">{title}</p>
      <input
        className="[&::-webkit-slider-runnable-track]:appearance-none  w-full appearance-none bg-input rounded-lg h-2"
        type="range"
        name={name}
        id={id}
        min={min}
        max={max}
        value={value}
        disabled
      />
    </>
  );
};
// полоска прогресса, принимает минимум - максимум. текущее значение (велью), тайтл

export default ProgressBar;
