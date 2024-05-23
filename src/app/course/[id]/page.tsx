import { getCourseById } from "@/api/api";
import AreaBlock from "@/components/areaBlock";
import CourseListItem from "@/components/courseListItem";
import Header from "@/components/header";
import InfoBlock from "@/components/infoBlock";
import SecondaryHeading from "@/components/shared/secondaryHeading";
import SkillCard from "@/components/skillCard";
import { courseData } from "@/lib/courseData";
import React from "react";

const CoursePage = async ({ params }) => {
  const course = await getCourseById({ id: params.id })
  console.log(course)
  return (
    <main className="pl-left pr-right">
      <Header />
      <section className="mb-[60px]">
        <SkillCard src={courseData[course._id].img} alt={`Картинка для курса ${course.nameRU}`} />
        <SecondaryHeading>Подойдет для вас, если:</SecondaryHeading>
        <div className="grid grid-cols-3 gap-x-[17px] ">
          {course.fitting.map(
            (item, index) => <CourseListItem number={index + 1} text={item} key={index} />)}
        </div>
      </section>
      <section className="mb-[60px]">
        <SecondaryHeading>Направления</SecondaryHeading>

        <div className="grid grid-cols-3 gap-y-9 bg-bright-green p-[30px] rounded-small">
          {course.directions.map(
            (item, index) => <AreaBlock key={index} text={item} />
          )}
        </div>

        <InfoBlock courseId={course._id}/>
      </section>
    </main>
  );
};

export default CoursePage;
