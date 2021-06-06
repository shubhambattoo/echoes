import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Button,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const ForgotPassword: React.FC = () => {
  return (
    <Layout>
      <Container maxW="lg" mt={6}>
        <Box>
          <Heading as="h1" size="lg" pt={6}>
            Forgot Password
          </Heading>
          <Stack spacing={6} mt={12}>
            <form>
              <FormControl id="email" w="70%">
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" w="100%" />
              </FormControl>
              <Box mt={8}>
                <Button
                  bg="gray.900"
                  color="white"
                  _hover={{ bg: 'gray.700' }}
                  type="submit"
                >
                  Send Password Reset
                </Button>
              </Box>
              <Box mt={8}>
                <Text fontSize="md">
                  Don't have an account?{' '}
                  <Link href="/signup" passHref>
                    <ChakraLink>Sign Up</ChakraLink>
                  </Link>
                </Text>
              </Box>
            </form>
          </Stack>
        </Box>
      </Container>
    </Layout>
  );
};

export default ForgotPassword;
