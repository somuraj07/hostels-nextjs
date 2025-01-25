// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "hostels-estate.firebaseapp.com",
  projectId: "hostels-estate",
  storageBucket: "hostels-estate.firebasestorage.app",
  messagingSenderId: "893345605980",
  appId: "1:893345605980:web:1b5d8d73ef9b4305f6b999"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);