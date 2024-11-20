// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvG5McjjcdYpfFkFOqd49cXmMbXwr4uOs",
  authDomain: "netflix-gpt-a8467.firebaseapp.com",
  projectId: "netflix-gpt-a8467",
  storageBucket: "netflix-gpt-a8467.firebasestorage.app",
  messagingSenderId: "212950649129",
  appId: "1:212950649129:web:4522746dbce6a06ebd0f38",
  measurementId: "G-E83Q43M6NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
