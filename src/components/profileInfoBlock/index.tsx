'use client';
import React from "react";
import Button from "../shared/button";

const ProfileInfoBlock = () => {
  const resetPwd = () =>{};
  const logout = () =>{};
  return (
    <div className="flex flex-col justify-between">
      <p className="text-lg">Сергей</p>
      <div>
        <p className="text-sm mb-2.5">Логин: sergey.petrov96</p>
        <p className="text-sm">Пароль: 4fkhdj880d</p>
      </div>
      <div className="flex gap-2.5 h-[52px] w-[394px]">
        <Button onClick = {resetPwd} type={"button"} green={true}>Изменить пароль</Button>
        <Button onClick = {logout} type={"button"} green={false}>Выйти</Button>
      </div>
    </div>
  );
};
//где имя, пароль, логин, кнопки
export default ProfileInfoBlock;
