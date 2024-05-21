"use client";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input/input";
import Logo from "@/components/shared/logo";
import React, { useState } from "react";

const SignUpPage = () => {
  const formFields = {
    email: "",
    password: "",
    password_repeat: ""
  };

  const [formData, setFormData] = useState(formFields);

  function handleChange(e: any) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const signIn = () => {};
  const signUp = () => {};
  return (
    <section className="shadow-base rounded flex flex-col items-center p-[30px] w-[360px] m-auto ">
      <Logo />
      <div className="mt-12 mb-[34px] grid gap-y-2.5 w-full">
        <Input
          type={"email"}
          name={"email"}
          placeholder={"Эл. почта"}
          onChange={handleChange}
        />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Пароль"}
          onChange={handleChange}
        />
        <Input
          type={"password"}
          name={"password_repeat"}
          placeholder={"Повторите пароль"}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2.5 w-full">
        <Button onClick={signUp} type={"button"} green={false}>
          Зарегистрироваться
        </Button>
        <Button onClick={signIn} type={"button"} green={true}>
          Войти
        </Button>
      </div>
    </section>
  );
};

export default SignUpPage;
