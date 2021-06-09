import '../styles/globals.css';
import { AuthUserProvider } from '../contexts/auth';
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  sizes: {
    lg: '1024px',
    xl: '1280px',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthUserProvider>
  );
}

export default MyApp;
