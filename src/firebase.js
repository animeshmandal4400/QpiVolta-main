// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA41rfI7wIyW5VpehTfl8i7aylVUdWns6Q",
  authDomain: "qpivolta.firebaseapp.com",
  projectId: "qpivolta",
  storageBucket: "qpivolta.appspot.com",
  messagingSenderId: "894270284707",
  appId: "1:894270284707:web:fbae71ed232bd30e5af016",
  measurementId: "G-87FKQT8CT0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
