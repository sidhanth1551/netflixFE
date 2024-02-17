// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvIuxYY7k-Bl32y64vi8NPzMEIYww1lWc",
  authDomain: "netflixbe-7747c.firebaseapp.com",
  projectId: "netflixbe-7747c",
  storageBucket: "netflixbe-7747c.appspot.com",
  messagingSenderId: "1026343190842",
  appId: "1:1026343190842:web:ebcc6bff99fc06bab51003",
  measurementId: "G-R40T8C5R9Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
