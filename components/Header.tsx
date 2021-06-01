import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { ColorModeSwitcher } from './../ColorModeSwitcher';

const Header: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingY="1rem"
      paddingX="1.5rem"
      bg="gray.100"
      color="black"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 1px 10px -5px"
      borderBottom="1px solid rgb(184, 184, 184)"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          <Link href="/" passHref>
            <ChakraLink
              _hover={{ textDecor: 'none' }}
              _focus={{ outline: 'none' }}
            >
              <Image
                src="/logo.png"
                alt="Echoes Brand Logo"
                width="35"
                height="35"
              />
            </ChakraLink>
          </Link>
        </Heading>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Stack direction="row" spacing={4}>
          <Link href="/login" passHref>
            <Button
              bg="transparent"
              paddingY=".5rem"
              fontSize="14.5px"
              border="1px"
              borderColor="grey.200"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button
              bg="transparent"
              paddingY=".5rem"
              fontSize="14.5px"
              border="1px"
              borderColor="grey.200"
            >
              Create account
            </Button>
          </Link>
          {/* <ColorModeSwitcher /> */}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;