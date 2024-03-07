// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9p5Fc9NptbYTCN5aF6B1jtyuk-lido3w",
  authDomain: "christine-1ed98.firebaseapp.com",
  projectId: "christine-1ed98",
  storageBucket: "christine-1ed98.appspot.com",
  messagingSenderId: "171944867327",
  appId: "1:171944867327:web:a85b9065dfb71ddfff23ca",
  measurementId: "G-EWXCQNT14Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);

export { auth }