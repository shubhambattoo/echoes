import { useState, useEffect } from 'react';
import Firebase from '../firebase';

type AuthFn = (
  email: string,
  password: string
) => Promise<Firebase.auth.UserCredential>;

type firebaseAuthHook = {
  authUser: { uid: string; email: string };
  loading: boolean;
  signInWithEmailAndPassword: AuthFn;
  createUserWithEmailAndPassword: AuthFn;
  signOut: () => Promise<any>;
};

const formatAuthUser = (
  user: Firebase.User
): { uid: string; email: string } => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth(): firebaseAuthHook {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState: Firebase.User) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<Firebase.auth.UserCredential> =>
    Firebase.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<Firebase.auth.UserCredential> =>
    Firebase.auth().createUserWithEmailAndPassword(email, password);

  const signOut = () => Firebase.auth().signOut().then(clear);

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
