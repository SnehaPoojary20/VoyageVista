import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCvmu_E-EsWA25NNcEzC2Ad8i4fDVsrF40",
  authDomain: "voyagevista-304d3.firebaseapp.com",
  projectId: "voyagevista-304d3",
  storageBucket: "voyagevista-304d3.appspot.com",
  messagingSenderId: "6042403124",
  appId: "1:6042403124:web:5c57932ed94382ab8da561"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); // ✅ Prevent re-initialization
const auth = getAuth(app);
const db = getFirestore(app);  // ✅ Add Firestore

export { auth, db };