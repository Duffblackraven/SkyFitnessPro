"use client";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input/input";
import Logo from "@/components/shared/logo";
import React, { useState } from "react";

const SignInPage = () => {
  const formFields = {
    login: "",
    password: "",
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
    <section className="shadow-base rounded flex flex-col items-center align-items:center p-[30px] w-[360px] m-auto ">
      <Logo />
      <div className="mt-12 mb-[34px] grid gap-y-2.5 w-full">
        <Input
          type={"text"}
          name={"login"}
          placeholder={"Логин"}
          onChange={handleChange}
        />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Пароль"}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2.5 w-full">
        <Button onClick={signIn} type={"button"} green={true}>
          Войти
        </Button>
        <Button onClick={signUp} type={"button"} green={false}>
          Зарегистрироваться
        </Button>
      </div>
    </section>
  );
};

export default SignInPage;
