import { getCourses, getUserCourses } from "@/api/api";
import Header from "@/components/header";
import CourseCard from "@/components/shared/courseCard";
import ScrollToTopButton from "@/components/shared/scrollToTopButton";
import { mapCourses } from "@/helpers/mapCourses";
import { courseData } from "@/lib/courseData";
import { courseType } from "@/types/types";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {


 
  const userName = cookies().get("email")?.value;
  if (!userName) {
    redirect("/signin")
  }
  const userId = cookies().get("uid")?.value;
   if (!userId) {
    redirect("/signin")
  }
  let coursesUserId: string[] = [];

  const data = await getUserCourses({ userId });
  const coursesUser = await mapCourses(data);
  coursesUser.map((item) => coursesUserId.push(item._id))
  
  const courses = await getCourses();
  return (
    <>
      <Header userName={userName} />

      <main className="flex min-h-screen flex-col items-center justify-between grid gap-[15px] mt-[50px] mb-[69px] pl-left pr-right">
        <section className="mb-[60px]">
          <div className="flex gap-1.5 items-start">
            <h1 className="text-[60px] leading-[110%] font-semibold text-black mb-10">
              Начните заниматься спортом и улучшите качество жизни
            </h1>
            <Image
              className=""
              src="/img/green_message.png"
              alt="green_message"
              width={300}
              height={120}
            />
          </div>
        </section>
        <section>
          <div className="grid grid-cols-card gap-10">
            {courses.map((item) => (
              <CourseCard
                item={item}
                idCourse={item._id}
                key={item._id}
                name={item.nameRU}
                time={item.time}
                duration={item.duration}
                progress={item.progress}
                img={courseData[item._id].smImg}
                isAdded={userId && coursesUserId.includes(item._id) ? true : false}
                level={item.level}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className="mt-10 mb-10 text-center text">
        <ScrollToTopButton />
      </footer>
    </>
  );
}