import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeMSpI4Gou7sroOT4sJgYnMjP_uOz8-QE",
  authDomain: "weekly-schedule-app.firebaseapp.com",
  projectId: "weekly-schedule-app",
  storageBucket: "weekly-schedule-app.appspot.com",
  messagingSenderId: "52638313536",
  appId: "1:52638313536:web:38c76e80fc164db9ee03a5",
  measurementId: "G-T31418DPV1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
