// "use client";
import { signIn } from "@/api/auth";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input/input";
import Logo from "@/components/shared/logo";
import { auth } from "@/firebase/firebase";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const SignInPage = () => {
  // const formFields = {
  //   login: "",
  //   password: "",
  // };

  // const [formData, setFormData] = useState(formFields);

  // function handleChange(e: any) {
  //   const { name, value } = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // }
  const handleSignin = async (data) => {
    "use server"
    let error = null
    try {
      const { password, email } = Object.fromEntries(data)
      if (!password || !email) {
        return
      }
      const response = await signIn({ password, email })
      console.log("текущий юзер", auth.currentUser?.email, auth.currentUser?.displayName)

    } catch (err) {
      console.log(err.message)
      error = err.message
    } finally {
      if(!error){
        {redirect("/")}
      }
    }

  };

  return (
    <section className="shadow-base rounded flex flex-col items-center align-items:center p-[30px] w-[360px] m-auto text-black">
      <Logo />

      <div className="mt-12 mb-[34px] grid gap-y-2.5 w-full text-black">
        <form action={handleSignin}>
          <Input
            type={"text"}
            name={"email"}
            placeholder={"Логин"}

          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"Пароль"}

          />
          <div className="flex flex-col gap-2.5 w-full text-black">
            <Button type={"submit"} green={true}>
              Войти
            </Button>
            <Link href="/signup">
              Зарегистрироваться
            </Link>

          </div>
        </form>
      </div>



    </section >
  );
};

export default SignInPage;
