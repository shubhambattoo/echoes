import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
  InputRightAddon,
  InputGroup,
  Button,
  Link as ChakraLink,
  FormErrorMessage,
  FormErrorIcon,
  Image,
} from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { useAuth } from '../contexts/auth';
import { useRouter } from 'next/dist/client/router';
import { Status } from '../utils/enums';
import { FormData } from '../types';
import { emailRegex } from '../utils/constants';

const Login: React.FC = () => {
  const { signInWithEmailAndPassword } = useAuth();
  const { push } = useRouter();
  const [status, setStatus] = useState(Status.IDLE);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const registerSubmit = ({ email, password }: FormData) => {
    setStatus(Status.PENDING);
    signInWithEmailAndPassword(email, password)
      .then(() => {
        setStatus(Status.SUCCESS);
        // route to dashboard
        push('/dashboard');
      })
      .catch((err) => {
        setStatus(Status.FAIL);
        console.log(err);
      });
  };

  function handleShowPassword(): void {
    setIsPasswordShown(!isPasswordShown);
  }

  return (
    <Layout>
      <Container maxW="lg" mt={6}>
        <Grid templateColumns="1fr 2fr" gap={2}>
          <Box w="100%" h="100%">
            <form onSubmit={handleSubmit(registerSubmit)}>
              <Flex direction="column" justify="center" h="calc(100vh - 180px)">
                <Stack spacing={1} mb={6}>
                  <Heading as="h1" size="lg">
                    Log In
                  </Heading>
                  <Text fontSize="sm">
                    Need a new Account?{' '}
                    <Link href="/signup" passHref>
                      <ChakraLink>Sign Up</ChakraLink>
                    </Link>
                  </Text>
                </Stack>
                <Stack spacing={3} mb={6}>
                  <FormControl
                    id="email"
                    w="100%"
                    isInvalid={errors.email ? true : false}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      w="100%"
                      {...register('email', {
                        required: true,
                        pattern: emailRegex,
                      })}
                      errorBorderColor="red.400"
                    />
                    <FormErrorMessage>
                      <FormErrorIcon />{' '}
                      {errors?.password?.type === 'required'
                        ? 'Email is required'
                        : 'Provide a valid email.'}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    id="password"
                    w="100%"
                    isInvalid={errors.password ? true : false}
                  >
                    <FormLabel>Password</FormLabel>
                    <InputGroup w="100%">
                      <Input
                        type={isPasswordShown ? 'text' : 'password'}
                        name="password"
                        {...register('password', {
                          required: true,
                          minLength: 6,
                        })}
                        errorBorderColor="red.400"
                      />
                      <InputRightAddon width="4.5rem">
                        <Button
                          size="sm"
                          leftIcon={
                            isPasswordShown ? <FaEyeSlash /> : <FaEye />
                          }
                          onClick={handleShowPassword}
                          outlineColor="transparent"
                        >
                          Show
                        </Button>
                      </InputRightAddon>
                    </InputGroup>
                    <FormErrorMessage>
                      <FormErrorIcon />{' '}
                      {errors?.password?.type === 'required'
                        ? 'Password is required'
                        : 'Provide a password with minimum 6 characters.'}
                    </FormErrorMessage>
                  </FormControl>
                </Stack>
                <Box mt={6}>
                  <Button
                    isFullWidth
                    bg="gray.900"
                    color="white"
                    _hover={{ bg: 'gray.700' }}
                    type="submit"
                    disabled={status === Status.PENDING}
                  >
                    Sign In
                  </Button>
                  <Box mt={3}>
                    <Text fontSize="sm">
                      <Link href="/forgot-password" passHref>
                        <ChakraLink>Forgot Password?</ChakraLink>
                      </Link>
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </form>
          </Box>

          <Box
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <Image
                src="/sign-in.png"
                width="600px"
                objectFit="contain"
                objectPosition="center"
              />
            </Box>
            <Text textAlign="right" mt="2" fontSize="sm">
              Illustration by{' '}
              <ChakraLink
                href="https://icons8.com/illustrations/author/5dbbfa4a01d0360016456d51"
                isExternal
              >
                Murat Kalkavan
              </ChakraLink>{' '}
              from{' '}
              <ChakraLink href="https://icons8.com/illustrations" isExternal>
                Ouch!
              </ChakraLink>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Login;
