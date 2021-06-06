import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useAuth } from '../context/auth';

const PvtRoute = ({ children }) => {
  const { loading, authUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/');
    }
  }, [loading, authUser]);

  return <>{authUser ? children : null}</>;
};

export default PvtRoute;
