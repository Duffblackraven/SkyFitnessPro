import Logo from "@/components/shared/logo";
import SignInForm from "@/components/signInForm";
import { auth } from "@/firebase/firebase";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const SignInPage = () => {


  return (
    <section className="shadow-base rounded flex flex-col items-center align-items:center p-[30px] w-[360px] m-auto mt-[15%]  text-black">
      <Logo />
      <div className="mt-12 mb-[34px]  w-full text-black">
        <SignInForm />
      </div>
    </section>
  );
};

export default SignInPage;
