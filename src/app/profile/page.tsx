import { getCourseById, getUserCourses } from "@/api/api";
import Header from "@/components/header";
import ProfileInfoBlock from "@/components/profileInfoBlock";
import CourseCard from "@/components/shared/courseCard";
import SecondaryHeading from "@/components/shared/secondaryHeading";
import { auth } from "@/firebase/firebase";
import { mapCourses } from "@/helpers/mapCourses";
import { transormData } from "@/helpers/transformData";
import WithAuth from "@/hoc/WithAuth";
import { courseData } from "@/lib/courseData";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = async () => {
  const userId = cookies().get("uid")?.value;

  const data = await getUserCourses({ userId });

  const courses = await mapCourses(data);
  return (
    <>
      <Header />
      <main className="pl-left pr-right">
        <section className="mb-[60px]">
          <SecondaryHeading>Профиль</SecondaryHeading>
          <div className="flex shadow-base p-[30px] rounded">
            <Image
              className="mr-8"
              src="/img/profile.png"
              alt=""
              width={197}
              height={197}
            />
            <ProfileInfoBlock />
          </div>
        </section>
        <section>
          <SecondaryHeading>Мои курсы</SecondaryHeading>
          <div className="grid grid-cols-card gap-10 ">
            {courses.map((item) => (
              <CourseCard
                showProgressAndButton={true}
                item={item}
                key={item.id}
                name={item.name}
                time={item.time}
                duration={item.duration}
                progress={item.progress}
                img={courseData[item.id].smImg}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default WithAuth(ProfilePage);
