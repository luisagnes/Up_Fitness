// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoO4tkBhurLbQa3McU7HiXw3SXMIlpJ8o",
  authDomain: "backend-up-fitness.firebaseapp.com",
  projectId: "backend-up-fitness",
  storageBucket: "backend-up-fitness.appspot.com",
  messagingSenderId: "398147421854",
  appId: "1:398147421854:web:790bd9543eeb1715ff9d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
