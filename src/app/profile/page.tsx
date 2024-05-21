import Header from "@/components/header";
import ProfileInfoBlock from "@/components/profileInfoBlock";
import CourseCard from "@/components/shared/courseCard";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <main className="pl-left pr-right">
        <section className="mb-[60px]">
          <h1 className="text-xl mb-10">Профиль</h1>
          <div className="flex shadow-base p-[30px] rounded">
            <Image
              className="mr-8"
              src="/profile.png"
              alt=""
              width={197}
              height={197}
            />
            <ProfileInfoBlock />
          </div>
        </section>
        <section>
          <h2 className="text-xl mb-10">Мои курсы</h2>
          <div className="grid grid-cols-card gap-10 ">
            <CourseCard name={'Йога'} time={'25-50'} duration={25} progress={40} img={'/card_yoga.png'} />
            <CourseCard name={'Стретчинг'} time={'25-50'} duration={25} progress={0} img={'/card_stretch.png'} />
            <CourseCard name={'Зумба'} time={'25-50'} duration={25} progress={100} img={'/card_zumba.png'} />
          </div>
        </section>
      </main>
    </>
  );
};
export default ProfilePage;
