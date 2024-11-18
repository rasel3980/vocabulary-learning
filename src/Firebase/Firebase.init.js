// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz8HxJ75uLJz8fkw4Irr6VEakLt1HRjB0",
  authDomain: "vocabulary-authentication.firebaseapp.com",
  projectId: "vocabulary-authentication",
  storageBucket: "vocabulary-authentication.firebasestorage.app",
  messagingSenderId: "992279833609",
  appId: "1:992279833609:web:dfb7aab1a891ca883f5cd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)