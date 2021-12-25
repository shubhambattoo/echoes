import { createContext, useContext, Context, useEffect, useState } from 'react';
import useUsers from '../lib/useUsers';
import { useAuth } from './auth';

const UserContext = createContext({ userDetails: null });

export const UserContextProvider = ({ children }) => {
  const { getUser } = useUsers();
  const { loading, authUser } = useAuth();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (!loading && authUser) {
      getUser(authUser.email)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch(() => {
          setCurrentUser(null);
        });
    }
  }, [authUser, loading]);

  return (
    <UserContext.Provider value={{ userDetails: currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
