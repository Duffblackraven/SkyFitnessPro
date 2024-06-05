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
  const handleResetPassword = async (data: FormData) => {
    "use server"
    try {
      const { password } = Object.fromEntries(data) as {password: string}
      const response = await changePassword({ password })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section className="shadow-base rounded flex flex-col items-center p-[30px] w-[360px] m-auto text-black">
      <Logo />
      <div className="mt-12 mb-[34px] grid gap-y-2.5 w-full">
        <form action={handleResetPassword}>
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

          <div className="flex flex-col gap-2.5 w-full">
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