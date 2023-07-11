import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-yS9eLB8bezvBSLva3GsnLtJmaOUju-0",
  authDomain: "upf1-cd5cb.firebaseapp.com",
  projectId: "upf1-cd5cb",
  storageBucket: "upf1-cd5cb.appspot.com",
  messagingSenderId: "1063308274852",
  appId: "1:1063308274852:web:430a86d87d6c4fa1388a31",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };