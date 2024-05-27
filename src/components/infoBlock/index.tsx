import React from "react";
import Button from "../shared/button";
import { addCourse } from "@/api/api";
import { auth } from "@/firebase/firebase";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const InfoBlock = ({ courseId }) => {
  const onClick = async () => {
    "use server";
    try {
      const userId = cookies().get("uid")?.name;
      const data = await addCourse({
        courseId,
        userId,
      });
    } catch (error) {
      if (error.message === "not authorized") redirect("/signin");
    }
    redirect("/profile");
  };
  return (
    <div>
      <form action={onClick}>
        <Button type="submit">Добавить курс</Button>
      </form>
    </div>
  );
};
//будет меняться текст в кнопке, событие на кнопке
//в зависимости от того, авторизован ли пользователь.
export default InfoBlock;
