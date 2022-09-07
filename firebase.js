// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjUbpx_w4IuH9gkRklt5mXAvH3JnoRTh4",
  authDomain: "kateldo-v2.firebaseapp.com",
  projectId: "kateldo-v2",
  storageBucket: "kateldo-v2.appspot.com",
  messagingSenderId: "543682852724",
  appId: "1:543682852724:web:e22f09ea1083871e611e21",
  measurementId: "G-4GBZYES8JJ",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const firestore = (
//   !getApps().length ?? initializeApp(firebaseConfig)
// ).getFirestore();
export { app, db, storage };
