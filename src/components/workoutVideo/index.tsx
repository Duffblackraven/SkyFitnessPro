import { getCourseById, getWorkoutById } from "@/api/api";
import React from "react";

const WorkoutVideo = ({video}: {video: string}) => {
  
  return (
    <iframe
      width="100%"
      height="639px"
      src={video}
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="rounded my-10"
    ></iframe>
  );
};

export default WorkoutVideo;
