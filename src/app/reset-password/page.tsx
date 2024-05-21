"use client";
import Button from '@/components/shared/button';
import Input from '@/components/shared/input/input';
import Logo from '@/components/shared/logo';
import React, { useState } from 'react'

const ResetPasswordPage = () => {
  const formFields = {
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
  const resetPwd = () => {};
  return (
    <section className="shadow-base rounded flex flex-col items-center p-[30px] w-[360px] m-auto ">
      <Logo />
      <div className="mt-12 mb-[34px] grid gap-y-2.5 w-full">
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Новый пароль"}
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
        <Button onClick={resetPwd} type={"button"} green={true}>
          Подтвердить
        </Button>
      </div>
    </section>
  );
}

export default ResetPasswordPage