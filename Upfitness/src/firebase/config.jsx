import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-yS9eLB8bezvBSLva3GsnLtJmaOUju-0",
  authDomain: "upf1-cd5cb.firebaseapp.com",
  projectId: "upf1-cd5cb",
  storageBucket: "upf1-cd5cb.appspot.com",
  messagingSenderId: "1063308274852",
  appId: "1:1063308274852:web:430a86d87d6c4fa1388a31",

  // apiKey: "AIzaSyAWgPJaB279z2hWbAAEcGbaQ1C-7m7JgK4",
  // authDomain: "upfitness-cd361.firebaseapp.com",
  // projectId: "upfitness-cd361",
  // storageBucket: "upfitness-cd361.appspot.com",
  // messagingSenderId: "272126407038",
  // appId: "1:272126407038:web:b2052cdcbe91751365832f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
