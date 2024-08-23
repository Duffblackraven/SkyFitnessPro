"use client";

import React from "react";
import Button from "../shared/button";
import Input from "../shared/input/input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { handleSignup } from "@/actions";

export const SignUpForm = () => {
  const [state, formAction] = useFormState(handleSignup, { message: "" });
  return (
    <form className="grid gap-y-2.5" action={formAction}>
      <Input type={"email"} name={"email"} placeholder={"Эл. почта"} />
      <Input type={"password"} name={"password"} placeholder={"Пароль"} />
      <Input
        type={"password"}
        name={"password_repeat"}
        placeholder={"Повторите пароль"}
      />

      <div className="flex  mt-[24px] flex-col gap-2.5 w-full text-black">
        <p className="text-red-600 text-center">{state?.message}</p>
        <Button type={"submit"} green={true}>
          Зарегистрироваться
        </Button>
        <Link
          className="w-full text-center text-sm border py-4 px-[26px] rounded border-black hover:bg-light-grey active:bg-dark-grey"
          href="/signin"
        >
          Войти
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
