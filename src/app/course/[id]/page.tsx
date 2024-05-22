import AreaBlock from "@/components/areaBlock";
import CourseListItem from "@/components/courseListItem";
import Header from "@/components/header";
import SecondaryHeading from "@/components/shared/secondaryHeading";
import React from "react";

const CoursePage = () => {
  return (
    <main className="pl-left pr-right">
      <Header />
      <section className="mb-[60px]">
        <SecondaryHeading>Подойдет для вас, если:</SecondaryHeading>
        <div className="grid grid-cols-3 gap-x-[17px] ">
          <CourseListItem
            number={"1"}
            text={"Давно хотели попробовать йогу, но не решались начать"}
          />
          <CourseListItem
            number={"2"}
            text={
              "Хотите укрепить позвоночник, избавиться от болей в спине и суставах"
            }
          />
          <CourseListItem
            number={"3"}
            text={"Ищете активность, полезную для тела и души"}
          />
        </div>
      </section>
      <section className="mb-[60px]">
        <SecondaryHeading>Направления</SecondaryHeading>
        <div className="grid grid-cols-3 gap-y-9 bg-bright-green p-[30px] rounded-small">
          <AreaBlock text={"Йога для новичков"} />
          <AreaBlock text={"Кундалини-йога"} />
          <AreaBlock text={"Хатха-йога"} />
          <AreaBlock text={"Классическая йога"} />
          <AreaBlock text={"Йогатерапия"} />
          <AreaBlock text={"Аштанга-йога"} />
        </div>
      </section>
    </main>
  );
};

export default CoursePage;
