import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQZ3Op4eG-tPMH7TTelPB1IPMWS9R9Znc",

  authDomain: "openinapp2.firebaseapp.com",

  projectId: "openinapp2",

  storageBucket: "openinapp2.appspot.com",

  messagingSenderId: "455947371332",

  appId: "1:455947371332:web:5be4d32d52c2a772a54d11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const timestamp = serverTimestamp;
export const collectionRef = (collectionName) => collection(db, collectionName);
