"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signIn, signUp } from "./api/auth";
import { auth } from "./firebase/firebase";

export const logoutUser = async () => {
  cookies().delete("email");
  cookies().delete("uid");
  redirect("/signin");
};

export const handleSignin = async (_: unknown, data: FormData) => {
  let error = null;
  try {
    const { password, email } = Object.fromEntries(data) as {
      password: string;
      email: string;
    };
    if (!password || !email) {
      error = "Заполните все поля!";
      return {
        message: "Заполните все поля!",
      };
    }
    await signIn({ password, email });
    console.log(
      "текущий юзер",
      auth.currentUser?.email,
      auth.currentUser?.displayName
    );
  } catch (err) {
    if (err instanceof Error) {
      error = err.message;
      return {
        message: err.message,
      };
    }
  } finally {
    if (!error) {
      {
        redirect("/");
      }
    }
  }
};

export const handleSignup = async (_: unknown, data: FormData) => {
  let error = null;
  try {
    const { password, email, password_repeat } = Object.fromEntries(data) as {
      password: string;
      email: string;
      password_repeat: string;
    };

    const response = await signUp({ password, email });

    if (!password || !email) {
      error = "Заполните все поля!!!";
      return {
        message: "Заполните все поля!!!",
      };
    }
    
    if (password.length < 6) {
      error = "Пароль должен быть больше 5 символов!!!";
      return {
        message: "Пароль должен быть больше 5 символов!!!",
      };
    }

    if (password !== password_repeat) {
      error = "Пароли не совпадают";
      return {
        message: "Пароли не совпадают",
      };
    }

  } catch (err) {
    if (err instanceof Error) error = err.message;
  } finally {
    if (!error) {
      {
        redirect("/signin");
      }
    }
  }
};
