import React, { useEffect, useState } from "react";
import {
  signUpApi,
  signInApi,
  googleSignInApi,
  signOutApi,
  onAuthStateChangeApi,
} from "../api/Auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    onAuthStateChangeApi(setUser);
  }, []);

  const signUp = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const userCredential = await signUpApi(email, password);
      setUser(userCredential.user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  //  signin with email password
  const signIn = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const userCredential = await signInApi(email, password);
      setUser(userCredential.user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  // signin with google
  const googleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const user = await await googleSignInApi();
      setUser({ ...user, token });
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  // signout
  const signOut = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signOutApi();
      setUser(null);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, error, signUp, signIn, googleSignIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
