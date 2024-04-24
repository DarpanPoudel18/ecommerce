// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpg4MZXdf7l7IA8hGVaeN7B_Pb58EaEXo",
  authDomain: "foodie-50089.firebaseapp.com",
  projectId: "foodie-50089",
  storageBucket: "foodie-50089.appspot.com",
  messagingSenderId: "277057392438",
  appId: "1:277057392438:web:65b78728babac05cb7ed97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
