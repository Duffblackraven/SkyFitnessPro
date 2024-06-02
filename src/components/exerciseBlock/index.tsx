import React from "react";
import ProgressBar from "../shared/progressBar";

const ExerciseBlock = ({ title, progress }) => {
  console.log(progress);
  return (
    <div className="">
      <ProgressBar
        name={"exerciseName"}
        min={0}
        max={100}
        value={progress}
        id={"exerciseId"}
        title={`${title} - ${progress}%`} 
        />
     </div>
  );
};

export default ExerciseBlock;
