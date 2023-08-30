// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWDQYjkAItNaYM8GQIB8E24S7npW-3Zlk",
  authDomain: "result-summary-page.firebaseapp.com",
  projectId: "result-summary-page",
  storageBucket: "result-summary-page.appspot.com",
  messagingSenderId: "647960257010",
  appId: "1:647960257010:web:a9fade84e87cb6c5e80b6b",
  measurementId: "G-QWCQJF017V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);