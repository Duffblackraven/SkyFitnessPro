import React from "react";
import Button from "../shared/button";
import { addCourse } from "@/api/api";
import { auth } from "@/firebase/firebase";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const InfoBlock = ({ courseId }: { courseId: string }) => {
  const onClick = async () => {
    "use server";
    try {
      const userId = cookies().get("uid")?.value;
      if(!userId){
        throw new Error("not authorized")
      }
      await addCourse({
        courseId,
        userId,
      });
    } catch (error) {
      if(error instanceof Error)
      if (error.message === "not authorized") redirect("/signin");
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
