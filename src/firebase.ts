// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoVjPNxwZlq_N6whcyp1pGJl-WRTQBZjY",
  authDomain: "react-contact-form-ef277.firebaseapp.com",
  projectId: "react-contact-form-ef277",
  storageBucket: "react-contact-form-ef277.appspot.com",
  messagingSenderId: "934772394166",
  appId: "1:934772394166:web:2d76d7f3b1834d6d713e17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);