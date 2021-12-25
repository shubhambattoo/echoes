import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useUser } from '../contexts/user';
import { request } from '../lib/request';
import useUsers from '../lib/useUsers';

const Connect = () => {
  const { setUserDetails } = useUsers();
  const { userDetails } = useUser();
  const { push } = useRouter();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const oauth_verifier = params.get('oauth_verifier');
    const oauth_token = params.get('oauth_token');
    const requestBody = { oauth_verifier, oauth_token };

    if (userDetails) {
      console.log('came here');
      request('api/getToken', { body: requestBody })
        .then((res: any) => {
          const accountsConnected = [
            {
              config: 'twitter',
              data: res.data,
            },
          ];

          const user = {
            email: userDetails.email,
            accountsConnected,
          };

          setUserDetails(userDetails.id, user)
            .then(() => {
              push('/dashboard');
            })
            .catch(() => {
              alert('Could not connect your twitter account. Try Again.');
              push('/dashboard');
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return <div></div>;
};

export default Connect;
