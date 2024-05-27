"use client";
import Image from "next/image";
import React, { useState } from "react";
import UserDropDown from "./userDropDown";
import Logo from "../shared/logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="grid gap-[15px] mt-[50px] mb-[60px] pl-left pr-right">
      <div className="flex justify-between">
        <Logo />
        {/* <button type="button" className="text-sm bg-bright-green py-4 px-[26px] rounded-full">Войти</button> */}
        <div
          className="flex items-center relative cursor-pointer"
          onClick={handleOpen}
        >
          <Image
            src="/img/icon-header.svg"
            alt="Логотип"
            width={42}
            height={42}
          />
          <p className="ml-5 mr-3 text-black">Сергей</p>
          <svg className="w-[8px] h-[8px]">
            <use xlinkHref="/img/sprite.svg#icon-arrow" />
          </svg>
          {isOpen && <UserDropDown />}
        </div>
      </div>
      <p className="xl:text-sm xl:opacity-50 text-black">
        Онлайн-тренировки для занятий дома
      </p>
    </header>
  );
};
//состоит из логтипа и кнопки войти либо дропдауна с пользовательской инфой.
export default Header;
