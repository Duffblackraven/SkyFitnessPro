import { getCourseById, getWorkoutById } from "@/api/api";
import React from "react";

const WorkoutVideo = () => {
  const id = "3yvozj";
  getWorkoutById({id}).then((data)=>{
    console.log(data);
  })
  return (
    <iframe
      width="100%"
      height="639px"
      src="https://www.youtube.com/embed/zxaoes0JQ5g"
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="rounded my-10"
    ></iframe>
  );
};

export default WorkoutVideo;
