import { createContext, useContext, Context } from 'react';
import useFirebaseAuth from '../lib/useFirebaseAuth';
import { AuthContextType } from '../types';

const AuthUserContext: Context<AuthContextType> = createContext({
  authUser: null,
  loading: Boolean(true),
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}
// custom hook to use the AuthUserContext and access authUser and loading
export const useAuth = () => useContext(AuthUserContext);
