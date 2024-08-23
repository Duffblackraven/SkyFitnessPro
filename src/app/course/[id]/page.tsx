import { getCourseById } from "@/api/api";
import AreaBlock from "@/components/areaBlock";
import CourseListItem from "@/components/courseListItem";
import Header from "@/components/header";
import InfoBlock from "@/components/infoBlock";
import SecondaryHeading from "@/components/shared/secondaryHeading";
import SkillCard from "@/components/skillCard";
import { courseData } from "@/lib/courseData";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import React from "react";

const CoursePage = async ({ params }: {params: {id: string}}) => {
  const course = await getCourseById({ id: params.id });
  const userName = cookies().get("email")?.value;
  if(!userName){
    redirect("/signin")
  }
  return (
    <main className="pl-left pr-right">
      
      <Header userName={userName} />
      <section className="mb-[60px]">
        <SkillCard src={courseData[course._id].img} alt={`Картинка для курса ${course.nameRU}`} />
        <SecondaryHeading>Подойдет для вас, если:</SecondaryHeading>
        <div className="grid grid-cols-3 gap-x-[17px] ">
          {course.fitting.map(
            (item: string, index: number) => <CourseListItem number={index + 1} text={item} key={index} />)}
        </div>
      </section>
      <section className="mb-[60px]">
        <SecondaryHeading>Направления</SecondaryHeading>

        <div className="grid text-black grid-cols-3 gap-y-9 bg-bright-green p-[30px] rounded-small">
          {course.directions.map(
            (item: string, index:number) => <AreaBlock key={index} text={item} />
          )}
        </div>
        <div className="p-10 flex justify-between items-end bg-white rounded relative shadow-base h-[500px] mt-[100px]">
            <section className="w-[400px] flex flex-col items-center gap-8">
              <h3 className="text-[60px] leading-[65px] font-semibold text-black">Начните путь к новому телу</h3>
              <h3 className="text-[20px] text-gray-400">
                • проработка всех групп мышц <br />
                • тренировка суставов <br />
                • улучшение циркуляции крови <br />
                • упражнения заряжают бодростью <br />
                • помогают противостоять стрессам</h3>

              <section className="w-[400px]"><InfoBlock courseId={course._id} /></section>
            </section>
            <section className="absolute left-[500px] bottom-0">
              <Image
                className=""
                src="/img/runner.png"
                alt="runner"
                width={700}
                height={700}
              />
            </section>
        </div>

      </section>
    </main>
  );
};

export default CoursePage;
