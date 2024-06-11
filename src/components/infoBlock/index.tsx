"use client";

import React from "react";
import Button from "../shared/button";
import { addCourse } from "@/api/api";
import { auth } from "@/firebase/firebase";
import { redirect, useSearchParams } from "next/navigation";
import { cookies } from "next/headers";

const InfoBlock = ({ courseId }: { courseId: string }) => {
  const searchParams = useSearchParams(); 
  const isAdded = searchParams.get('isAdded');
  const onClick = async () => {
    "use server";
    try {
      const userId = cookies().get("uid")?.value;
      if (!userId) {
        throw new Error("Пользователь не авторизован")
      }
      await addCourse({
        courseId,
        userId,
      });
    } catch (error) {
      if (error instanceof Error)
        if (error.message === "Пользователь не авторизован") redirect("/signin");
    }
    redirect("/profile");
  };
  return (
    <div>
      <form action={onClick}>
        <Button type="submit" green={true}>Добавить курс</Button>
      </form>
    </div>
  );
};

export default InfoBlock;
