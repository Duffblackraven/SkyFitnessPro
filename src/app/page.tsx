import { getCourses } from "@/api/api";
import CourseCard from "@/components/shared/courseCard";
import { mapCourses } from "@/helpers/mapCourses";
import { courseData } from "@/lib/courseData";
import Link from "next/link";


export default async function Home() {
  const data = await getCourses()
  console.log(data)
  const courses = await mapCourses(data)
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {courses.map((item) =>




        <CourseCard item={item} key={item.id} name={item.name} time={item.time} duration={item.duration} progress={item.progress} img={courseData[item.id].smImg} />





      )}


    </main >

  );
}

