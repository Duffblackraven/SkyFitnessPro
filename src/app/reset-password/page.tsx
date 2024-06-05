// "use client";
import { changePassword } from '@/api/auth';
import Button from '@/components/shared/button';
import Input from '@/components/shared/input/input';
import Logo from '@/components/shared/logo';
import React, { useState } from 'react'

const ResetPasswordPage = () => {
  // const formFields = {
  //   password: "",
  //   password_repeat: ""
  // };

  // const [formData, setFormData] = useState(formFields);

  // function handleChange(e: any) {
  //   const { name, value } = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // }
  const handleResetPassword = async (data) => {
    "use server"
    try {
      const { password } = Object.fromEntries(data)
      const response = await changePassword({ password })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section className="shadow-base rounded flex flex-col items-center align-items:center p-[30px] w-[360px] m-auto mt-[15%]  text-black">
      <Logo />
      <div className="">
        <form className="mt-12 mb-[34px] grid gap-y-2.5 w-full" action={handleResetPassword}>
          <Input
            type={"password"}
            name={"password"}
            placeholder={"Новый пароль"}
           
          />
          <Input
            type={"password"}
            name={"password_repeat"}
            placeholder={"Повторите пароль"}
            
          />

          <div className="mt-12 mb-[30px] w-full text-black">
            <Button  type={"submit"} green={true}>
              Подтвердить
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ResetPasswordPage