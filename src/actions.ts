"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signIn } from "./api/auth";
import { auth } from "./firebase/firebase";

export const logoutUser = async () => {

    cookies().delete("email");
    cookies().delete("uid");
    redirect("/signin");
};

export const handleSignin = async (_: unknown, data: FormData) => {

    let error = null;
    try {
        const { password, email } = Object.fromEntries(data) as { password: string, email: string };
        if (!password || !email) {
            error = "Заполните все поля!"
            return {
                message: "Заполните все поля!",
            }
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
            }

        }
    } finally {
        if (!error) {
            {
                redirect("/");
            }
        }
    }
};