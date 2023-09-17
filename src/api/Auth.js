import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/config";

const provider = new GoogleAuthProvider();

//  sign up email and password
export const signUpApi = async (email, password) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  return userCredentials;
};

//  sign up email and password
export const signInApi = async (email, password) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  return userCredentials;
};

// signin with google
export const googleSignInApi = async () => {
  const result = await signInWithPopup(auth, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  return { ...user, token };
};

// signout
export const signOutApi = async () => {
  await signOut(auth);
};

// onAuthStateChange api
export const onAuthStateChangeApi = (setUser) => {
  onAuthStateChanged(auth, setUser);
};
