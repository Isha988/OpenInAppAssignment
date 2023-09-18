import {
  addDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { db, timestamp } from "../firebase/config";

// Add a new profile
export const addProfile = async (profile) => {
  const createdAt = timestamp();
  const response = await addDoc(collection(db, "profiles"), {
    ...profile,
    createdAt,
  });
  return response.id;
};

// get all profiles
export const getProfiles = async (uid) => {
  const collectionQuery = query(
    collection(db, "profiles"),
    where("uid", "==", uid),
    orderBy("createdAt", "desc"),
  );
  const snapshot = await getDocs(collectionQuery);
  let profiles = [];
  snapshot.forEach((doc) => {
    profiles.push(doc.data());
  });
  return profiles;
};
