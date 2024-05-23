'use client';
import React from "react";
import Button from "../shared/button";
import HeadingFour from "../shared/headingFour";
import Link from "next/link";

const ProfileInfoBlock = () => {
  const resetPwd = () =>{};
  const logout = () =>{};
  return (
    <div className="flex flex-col justify-between">
      <HeadingFour>Сергей</HeadingFour>
      <div>
        <p className="text-sm mb-2.5">Логин: sergey.petrov96</p>
        <p className="text-sm">Пароль: 4fkhdj880d</p>
      </div>
      <div className="flex gap-2.5 h-[52px] w-[394px]">Link
        <Link href="/reset-password">Изменить пароль</Link>
        <Button onClick = {logout} type={"button"} green={false}>Выйти</Button>
      </div>
    </div>
  );
};
//где имя, пароль, логин, кнопки
export default ProfileInfoBlock;
