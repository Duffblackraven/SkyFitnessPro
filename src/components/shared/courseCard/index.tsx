import Image from "next/image";
import React from "react";
import ProgressBar from "../progressBar";
import Link from "next/link";
import { cookies } from "next/headers";
import { addCourse, deleteCourse} from "@/api/api";
import { redirect } from "next/navigation";

type CardProp = {
  name: string;
  time: string;
  duration: number;
  progress: number;
  img: string;
  showProgressAndButton?: boolean;
  isAdded: boolean;
  level: number;
};

const CourseCard = ({
  name,
  time,
  duration,
  progress,
  img,
  idCourse,
  item,
  showProgressAndButton = false,
  isAdded,
  level
}: CardProp) => {
  const userId = cookies().get("uid")?.value;
  const handleAddCourse = async () => {
    "use server";
    if (userId) {
      try {
        const userId = cookies().get("uid")?.value;
        const courseId = idCourse;
        const data = await addCourse({
          courseId,
          userId,
        });
      } catch (error) {
        if (error.message === "not authorized") redirect("/signin");
      }
      redirect("/profile");
    } else {
      redirect("/signin");
    }

  };

  const handleDeleteCourse = async () => {
    "use server";
    if (userId) {
      try {
        const userId = cookies().get("uid")?.value;
        const courseId = idCourse;
        const data = await deleteCourse({
          courseId,
          userId,
        });
      } catch (error) {
        if (error.message === "not authorized") redirect("/signin");
      }
      redirect("/profile");
    } else {
      redirect("/signin");
    }

  };
  
  let levelImg = "";
  switch (level) {
    case 1:
      levelImg = "levelOne"
      break;
    case 2:
      levelImg = "levelTwo"
      break;
    case 3:
      levelImg = "levelThree"
      break;
    case 4:
      levelImg = "levelFour"
      break;
    case 5:
      levelImg = "levelFive"
      break;

    default:
      levelImg="complexity"
      break;
  }

  return (
    <div className="bg-white rounded relative shadow-base">
      {userId && isAdded ? (
        <form action={handleDeleteCourse} className="absolute right-3 top-3">
          <button
            type="submit"
            data-tooltip="Удалить курс"
            className="after:content-[attr(data-tooltip)] after:opacity-0 after:transition-opacity after:rounded-md after:border after:border-black after:text-nowrap after:z-10 after:absolute after:top-10 after:left-6 after:bg-white after:text-[14px] after:p-1.5  hover:after:opacity-100"
          >
            <svg className="w-[32px] h-[32px]">
              <use xlinkHref="/img/sprite.svg#icon-delete" />
            </svg>
          </button>
        </form>
      ) : (
        <form action={handleAddCourse} className="absolute right-3 top-3">
          <button type="submit" data-tooltip="Добавить курс"
            className="after:content-[attr(data-tooltip)] after:opacity-0 after:transition-opacity after:rounded-md after:border after:border-black after:text-nowrap after:z-10 after:absolute after:top-10 after:left-6 after:bg-white after:text-[14px] after:p-1.5 hover:after:opacity-100"
            >
            <svg className="w-[32px] h-[32px]">
              <use xlinkHref="/img/sprite.svg#icon-add" />
            </svg>
          </button>
        </form>
      )}
      <Link href={`/course/${item._id}`} key={item._id}>
        <Image src={img} alt={name} width={360} height={325} />
      </Link>
      <div className="pt-6 pb-4 px-5 text-black">
        <h3 className="text-base font-bold mb-5">{name}</h3>
        <div className="flex flex-wrap mb-5 gap-[6px]">
          <div className="flex gap-2 p-2.5 bg-light-grey rounded">
            <svg className="w-[15px] h-[15px]">
              <use xlinkHref="/img/sprite.svg#icon-duration" />
            </svg>
            <p className="text-min">{duration} дней</p>
          </div>
          <div className="flex gap-2 p-2.5 bg-light-grey rounded">
            <svg className="w-[18px] h-[18px]">
              <use xlinkHref="/img/sprite.svg#icon-time" />
            </svg>
            <p className="text-min">{time} мин/день</p>
          </div>
          <div className="flex gap-2 p-2.5 bg-light-grey rounded">
            <svg className="w-[18px] h-[18px]">
              <use xlinkHref={`/img/sprite.svg#icon-${levelImg}`} />
            </svg>
            <p className="text-min">Сложность</p>
          </div>
        </div>
        {showProgressAndButton && (
          <>
            <div className="mb-10">
              <ProgressBar
                name={"progressCard"}
                id={"progressCard"}
                min={0}
                max={100}
                value={progress}
                title={`Прогресс ${progress}%`}
              />
            </div>
            <Link
              href={`/workouts/${item._id}`}
              key={item._id}
              className="block text-center w-full bg-bright-green py-4 px-[26px] rounded text-sm hover:bg-bright-green-hov active:bg-black active:text-white"
            >
              Продолжить
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
// используется в профиле и на главной странице.
// Принимает пропсами всю инфу про курс, сложность, название, кароч,
//  всю инфу как в макете, включая время.
//  Картинку пропсом или по названию.
export default CourseCard;
