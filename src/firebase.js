// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFnXOz9K7f3qJsM8pUBeZcMDEcRD9wlgM",
  authDomain: "zion-resume-website.firebaseapp.com",
  projectId: "zion-resume-website",
  storageBucket: "zion-resume-website.appspot.com",
  messagingSenderId: "225362596975",
  appId: "1:225362596975:web:bf4be1b0a183fc13dca99a",
  measurementId: "G-K271FRF6HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);