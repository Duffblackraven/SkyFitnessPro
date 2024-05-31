"use client";
import Image from "next/image";
import React, { useState } from "react";
import UserDropDown from "./userDropDown";
import Logo from "../shared/logo";
import Link from "next/link";

const Header = ({userName}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="grid px-4 mt-10 mb-20 sm:px-8 md:gap-[15px] md:px-14 xl:pl-left xl:pr-right">
      <div className="flex justify-between">
        <Logo />
        {userName === undefined ? <Link href="/signin" className="text-sm bg-bright-green py-4 px-[26px] rounded-full cursor-pointer">Войти</Link> : (
        <div
        className="flex items-center relative cursor-pointer"
        onClick={handleOpen}
      >
        <Image
        className="md:w-10 md:h-10"
          src="/img/icon-header.svg"
          alt="Логотип"
          width={30}
          height={30}
        />
        <p className="hidden md:block md:ml-5 md:mr-3 text-black">{userName}</p>
        <svg className="w-[8px] h-[8px] ml-[13px] md:ml-0">
          <use xlinkHref="/img/sprite.svg#icon-arrow" />
        </svg>
        {isOpen && <UserDropDown userName={userName}/>}
      </div>
        )}
  

      </div>
      <p className="hidden md:block md:text-sm md:opacity-50 text-black">
        Онлайн-тренировки для занятий дома
      </p>
    </header>
  );
};
//состоит из логтипа и кнопки войти либо дропдауна с пользовательской инфой.
export default Header;
