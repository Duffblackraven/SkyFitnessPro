"use client";
import { useRouter } from "next/navigation";

const SelectWorkoutBtn = ({ id }) => {
    const router = useRouter();

  const goToTheWorkoutPage = () => {
    const localIdWorkout = localStorage.getItem('idWorkout');
    router.push(`/workout-page/${id}/${localIdWorkout}`);
    localStorage.clear();
  }
  return (
    <button className="w-full bg-bright-green rounded py-4 px-7 text-sm text-black mt-[34px]" onClick={goToTheWorkoutPage}>Начать</button>
  );
};

export default SelectWorkoutBtn;
