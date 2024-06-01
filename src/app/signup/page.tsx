
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
    <section className="shadow-base rounded flex flex-col items-center p-[30px] w-[360px] m-auto mt-[15%] text-black">
      <Logo />
      <div className="mt-12 mb-[34px] grid gap-y-2.5 w-full text-black">
        <form className="grid gap-y-2.5" action={handleSignup}>
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

          <div className="flex  mt-[24px] flex-col gap-2.5 w-full text-black">
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
      </div>
    </section >
  );
};

export default SignUpPage;
