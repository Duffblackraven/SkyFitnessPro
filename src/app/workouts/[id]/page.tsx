import SelectWorkoutModal from "@/components/selectWorkoutModal";
import WithAuth from "@/hoc/WithAuth";
import React from "react";

const Workouts = ({ params }: { params: { id: string } }) => {
  return <SelectWorkoutModal id={params.id} />;
};

export default WithAuth(Workouts);
