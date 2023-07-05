// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzEIEZLLeqfGrHvVFz2qDtJ1vaXbqmmNo",
  authDomain: "udemy-6c37a.firebaseapp.com",
  projectId: "udemy-6c37a",
  storageBucket: "udemy-6c37a.appspot.com",
  messagingSenderId: "754094021862",
  appId: "1:754094021862:web:de6e7da0350ad8afd0ef27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default auth;
