import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB00c97wzm_FagjvUH8A8gCiIs_gp91d6w",
  authDomain: "myblog-22c44.firebaseapp.com",
  projectId: "myblog-22c44",
  storageBucket: "myblog-22c44.appspot.com",
  messagingSenderId: "452402051557",
  appId: "1:452402051557:web:1a47da8fc1e0df8791970c",
  measurementId: "G-CD655DD8GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);