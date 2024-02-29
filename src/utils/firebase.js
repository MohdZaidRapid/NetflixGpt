// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB88ZLMbskUGgBq_jDZ-tpBTncFg28f-bo",
  authDomain: "netflixgpt-ff5fb.firebaseapp.com",
  projectId: "netflixgpt-ff5fb",
  storageBucket: "netflixgpt-ff5fb.appspot.com",
  messagingSenderId: "1068553035156",
  appId: "1:1068553035156:web:3ecc1204fdaf0635ebc381",
  measurementId: "G-VYJNN6C1VL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
