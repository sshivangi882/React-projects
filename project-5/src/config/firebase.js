// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGvI0JqULLglZsRxJeNLtxxa5OMlE0US4",
  authDomain: "vite-contact-fe660.firebaseapp.com",
  projectId: "vite-contact-fe660",
  storageBucket: "vite-contact-fe660.appspot.com",
  messagingSenderId: "474460456236",
  appId: "1:474460456236:web:1e5403a79c70de3e179889"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);