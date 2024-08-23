import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { cookies } from "next/headers";

export async function signUp({ email, password }: { email: string, password: string }) {
    try {
        createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        throw error
    }
}

export async function signIn({ email, password }: { email: string, password: string }) {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password)
        console.log(result)
        cookies().set("uid", result.user.uid)
        cookies().set("email", result.user.email as string)
        return result
    } catch (error) {
        throw error
    }
}

export async function changePassword({ password }: { password: string }) {
    try {
        if (auth.currentUser === null) {
            throw new Error("Пользователь не авторизован")
        } else {
            updatePassword(auth.currentUser, password)
        }

    } catch (error) {
        throw error
    }
}