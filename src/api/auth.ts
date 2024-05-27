import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { cookies } from "next/headers";

export async function signUp({ email, password }) {
    try {
        createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        throw error
    }
}

export async function signIn({ email, password }) {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password)
        console.log(result)
        cookies().set("uid", result.user.uid)
        cookies().set("email", result.user.email)
        return result
    } catch (error) {
        throw error
    }
}

export async function changePassword({ password }) {
    try {
        updatePassword(auth.currentUser, password)
    } catch (error) {
        throw error
    }
}