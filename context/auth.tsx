import { createContext, useContext, Context } from 'react';
import Firebase from '../firebase';
import useFirebaseAuth from '../lib/useFirebaseAuth';

type AuthFn = (
  email: string,
  password: string
) => Promise<Firebase.auth.UserCredential>;

type AuthContextType = {
  authUser: any,
  loading: boolean,
  signInWithEmailAndPassword?: AuthFn;
  createUserWithEmailAndPassword?: AuthFn;
  signOut?: () => Promise<any>;
}

const AuthUserContext: Context<AuthContextType> = createContext({
  authUser: null,
  loading: Boolean(true)
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}
// custom hook to use the AuthUserContext and access authUser and loading
export const useAuth = () => useContext(AuthUserContext);
