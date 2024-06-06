import { signUp } from "@/api/auth";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input/input";
import Logo from "@/components/shared/logo";

import SignUpForm from "@/components/signupForm";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const SignUpPage = () => {
  return (
    <section className="shadow-base rounded flex flex-col items-center p-[30px] w-[360px] m-auto mt-[15%] text-black">
      <Logo />
      <SignUpForm/>
      <div className="mt-12 mb-[34px] grid gap-y-2.5 w-full text-black"></div>
    </section>
  );
};

export default SignUpPage;
