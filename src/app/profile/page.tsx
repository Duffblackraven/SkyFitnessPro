import { getCourseById, getUserCourses } from "@/api/api";
import Header from "@/components/header";
import ProfileInfoBlock from "@/components/profileInfoBlock";
import CourseCard from "@/components/shared/courseCard";
import SecondaryHeading from "@/components/shared/secondaryHeading";
import { auth } from "@/firebase/firebase";
import { logoutUser } from "@/helpers/logout";
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
  const userName = cookies().get("email")?.value;

  const courses = await mapCourses(data);
  return (
    <>
      <Header userName={userName} />
      <main className="px-4 sm:px-8 md:px-14 xl:pl-left xl:pr-right mt-10">
        <section className="mb-6">
          <SecondaryHeading>Профиль</SecondaryHeading>
          <div className="flex flex-col md:flex-row gap-y-7 md:gap-y-0 md:gap-x-8 shadow-base p-[30px] rounded">
            <Image
            // /mr-8
              className="block m-[auto] md:m-0"
              src="/img/profile.png"
              alt="Профиль"
              width={141}
              height={141}
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
                key={item._id}
                name={item.name}
                time={item.time}
                duration={item.duration}
                progress={item.progress}
                img={courseData[item._id].smImg}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default WithAuth(ProfilePage);
