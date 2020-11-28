import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
      padding="1.5rem"
      bg="gray.100"
      color="black"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Echoes
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
          <Button bg="transparent" border="1px" as={RouterLink} to="/login">
            Login
          </Button>
          <Button bg="transparent" border="1px" as={RouterLink} to="/signup">
            Create account
          </Button>
          {/* <ColorModeSwitcher /> */}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
