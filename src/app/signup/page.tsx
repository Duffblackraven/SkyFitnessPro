
import { signUp } from "@/api/auth";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input/input";
import Logo from "@/components/shared/logo";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const SignUpPage = () => {
  // const formFields = {
  //   email: "",
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
  // const signIn = () => {};
  const handleSignup = async (data) => {
    "use server"
    let error = null
    try {
      const { password, email } = Object.fromEntries(data)
      console.log(password, email)
      const response = await signUp({ password, email })
      if (!password || !email) {
        return
      }
    } catch (err) {
      console.log(err.message)
      error = err.message
    } finally {
      if (!error) {
        { redirect("/signin") }
      }
    }
  };
  return (
    <section className="shadow-base rounded flex flex-col items-center p-[30px] w-[360px] m-auto ">
      <Logo />
      <div className="mt-12 mb-[34px] grid gap-y-2.5 w-full">
        <form action={handleSignup}>
          <Input
            type={"email"}
            name={"email"}
            placeholder={"Эл. почта"}

          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"Пароль"}

          />
          <Input
            type={"password"}
            name={"password_repeat"}
            placeholder={"Повторите пароль"}

          />

          <div className="flex flex-col gap-2.5 w-full">
            <Button type={"submit"} green={false}>
              Зарегистрироваться
            </Button>
            <Link href="/signin" >
              Войти
            </Link>
          </div>
        </form>
      </div>
    </section >
  );
};

export default SignUpPage;
