import React from "react";
import Button from "../shared/button";
import HeadingFour from "../shared/headingFour";
import Link from "next/link";
import { cookies } from "next/headers";
import { logoutUser } from "@/actions";

const ProfileInfoBlock = () => {
  const email = cookies().get("email")?.value
  return (
    <div className="flex flex-col justify-between text-black">
      <HeadingFour>Логин: {email || "Аноним"}</HeadingFour>
      <form action={logoutUser} className="flex flex-col w-[394px] gap-x-3 mt-7 text-black gap-y-3 md:flex-row">
        <Link className="w-[192px] text-sm text-nowrap rounded py-4 px-6 bg-bright-green text-center hover:bg-bright-green-hov active:bg-black active:text-white" href="/reset-password">Изменить пароль</Link>
        <Button type={"submit"} green={false}>Выйти</Button>
      </form>
    </div>
  );
};

export default ProfileInfoBlock;
