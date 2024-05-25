
import React from "react";
import Button from "../shared/button";
import HeadingFour from "../shared/headingFour";
import Link from "next/link";
import { auth } from "@/firebase/firebase";
import { cookies } from "next/headers";

const ProfileInfoBlock = () => {
  const resetPwd = () => { };
  const logout = () => { };
  const email = cookies().get("email")?.value
  return (
<<<<<<< HEAD
    <div className="flex flex-col justify-between">
      <HeadingFour>{email || "Аноним"}</HeadingFour>

      <div className="flex gap-2.5 h-[52px] w-[394px]">
=======
    <div className="flex flex-col justify-between text-black">
      <HeadingFour>{email || "Аноним"}</HeadingFour>

      <div className="flex gap-2.5 h-[52px] w-[394px] text-black">
>>>>>>> 95ec70581bdd3d200d42d2f4dc566393f83301ca
        <Link href="/reset-password">Изменить пароль</Link>
        <Button  type={"button"} green={false}>Выйти</Button>
      </div>
    </div>
  );
};
//где имя, пароль, логин, кнопки
export default ProfileInfoBlock;
