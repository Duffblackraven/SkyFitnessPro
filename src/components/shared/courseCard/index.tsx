import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProgressBar from "../progressBar";

type CardProp = {
  id?: string;
  name: string;
  time: string;
  duration: number;
  progress: number;
  img: string;
  showProgressAndButton?: boolean;
};

const CourseCard = ({ id, name, time, duration, progress, img, showProgressAndButton = true }: CardProp) => {
  return (
    <div className="bg-white rounded relative shadow-base">
      <button
        type="button"
        data-tooltip="Удалить курс"
        className="absolute top-5 right-5 after:content-[attr(data-tooltip)] after:opacity-0 after:transition-opacity after:absolute after:bg-white after:text-min after:p-1.5 after:w-[100px] hover:after:opacity-100"
      >
        <svg className="w-[27px] h-[27px]">
          <use xlinkHref="/sprite.svg#icon-delete" />
        </svg>
      </button>
      <Link href={`/course/${id}`}>
          <Image src={img} alt={name} width={360} height={325} />
      </Link>
      <div className="pt-6 pb-4 px-[30px]">
        <h3 className="text-lg text-black font-normal mb-5">{name}</h3>
        <div className="flex flex-wrap mb-5">
          <div className="flex gap-2 p-2.5">
            <svg className="w-[15px] h-[15px]">
              <use xlinkHref="/sprite.svg#icon-duration" />
            </svg>
            <p className="text-min text-black">{duration} дней</p>
          </div>
          <div className="flex gap-2 p-2.5">
            <svg className="w-[18px] h-[18px]">
              <use xlinkHref="/sprite.svg#icon-time" />
            </svg>
            <p className="text-min text-black">{time} мин/день</p>
          </div>
          <div className="flex gap-2 p-2.5">
            <svg className="w-[18px] h-[18px]">
              <use xlinkHref="/sprite.svg#icon-complexity" />
            </svg>
            <p className="text-min text-black">Сложность</p>
          </div>
        </div>
        {showProgressAndButton && (
          <>
            <div className="mb-10">
              <ProgressBar name="progressCard" id="progressCard" min={0} max={100} value={progress} title={`Прогресс ${progress}%`} />
            </div>
            <button
              className="w-full bg-bright-green py-4 px-[26px] rounded text-sm text-black"
              type="button"
            >
              Продолжить
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;

// используется в профиле и на главной странице.
// Принимает пропсами всю инфу про курс, сложность, название, кароч,
//  всю инфу как в макете, включая время.
//  Картинку пропсом или по названию.
