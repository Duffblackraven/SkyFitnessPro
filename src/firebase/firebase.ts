// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFt6uuykOSXr_rYuGDnWE0GBZhc-Hj3SE",
  authDomain: "skyfitnesspro-4eb46.firebaseapp.com",
  projectId: "skyfitnesspro-4eb46",
  storageBucket: "skyfitnesspro-4eb46.appspot.com",
  messagingSenderId: "416910332004",
  appId: "1:416910332004:web:64fc7b5a8b0dfc16688f71"
};

// Initialize Firebase
export const initializeLoginFramework = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
export const auth = getAuth(initializeLoginFramework);

