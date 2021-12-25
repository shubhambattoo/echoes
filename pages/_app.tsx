import '../styles/globals.css';
import { AuthUserProvider } from '../contexts/auth';
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { UserContextProvider } from '../contexts/user';

const theme = extendTheme({
  sizes: {
    lg: '1024px',
    xl: '1280px',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <UserContextProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </UserContextProvider>
    </AuthUserProvider>
  );
}

export default MyApp;
