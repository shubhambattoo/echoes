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
  Link,
  FormErrorMessage,
  FormErrorIcon,
} from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../config';

type FormData = {
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const { register, handleSubmit, errors } = useForm<FormData>();

  const registerSubmit: any = (data: { email: string; password: string }) =>
    console.log(data);

  function handleShowPassword(): void {
    setIsPasswordShown(!isPasswordShown);
  }

  return (
    <Container maxW="lg" mt={6}>
      <Grid templateColumns="2fr 1fr" gap={2}>
        <Box w="100%">Illustration</Box>
        <Box w="100%" h="100%">
          <form onSubmit={handleSubmit(registerSubmit)}>
            <Flex direction="column" justify="center" h="calc(100vh - 180px)">
              <Stack spacing={1} mb={6}>
                <Heading as="h1" size="lg">
                  Sign up
                </Heading>
                <Text fontSize="sm">
                  Get started on giving your social media a move on
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
                    ref={register({
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
                      ref={register({ required: true, minLength: 6 })}
                      errorBorderColor="red.400"
                    />
                    <InputRightAddon width="4.5rem">
                      <Button
                        size="sm"
                        leftIcon={<FaEye />}
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
                >
                  Create an Account
                </Button>
                <Box mt={3}>
                  <Text fontSize="sm">
                    Already have a account?{' '}
                    <Link to="/login" as={RouterLink}>
                      Sign In
                    </Link>
                  </Text>
                </Box>
              </Box>
            </Flex>
          </form>
        </Box>
      </Grid>
    </Container>
  );
};

export default Signup;
