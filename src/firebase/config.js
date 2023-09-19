import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkKrcPaCoee3OS0WdmlIQ6vidG04rcNDU",
  authDomain: "openinapp-4fc92.firebaseapp.com",
  projectId: "openinapp-4fc92",
  storageBucket: "openinapp-4fc92.appspot.com",
  messagingSenderId: "873168923345",
  appId: "1:873168923345:web:e3fdb1a752a8668bdcf3f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const timestamp = serverTimestamp;
export const collectionRef = (collectionName) => collection(db, collectionName);
