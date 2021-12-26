import { useState, useEffect } from 'react';
import Firebase, { app } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AppAuthState, firebaseAuthHook } from '../types';

const formatAuthUser = (user: Firebase.User): AppAuthState => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth(): firebaseAuthHook {
  const [authUser, setAuthUser] = useState<AppAuthState>(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = (authState: Firebase.User) => {
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
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
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
