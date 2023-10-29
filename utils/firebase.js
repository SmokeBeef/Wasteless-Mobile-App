// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA54e3z0UoFwVc_CLChul3QUIlwBvfVYtE",
  authDomain: "wasless-fd04b.firebaseapp.com",
  projectId: "wasless-fd04b",
  storageBucket: "wasless-fd04b.appspot.com",
  messagingSenderId: "129969778912",
  appId: "1:129969778912:web:0a6a40923787bfcdf06085",
  measurementId: "G-KEX213TK9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);