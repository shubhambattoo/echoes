import { Box, Container, Flex, Heading } from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react';

const NoConnection = () => {
  return (
    <Container maxW="100vw" mt={1} paddingX="1.5rem">
      <Flex direction="column" alignItems="center">
        <Image
          boxSize="420px"
          objectFit="contain"
          src="/no-conn.png"
          alt="Man thinking about connecting his social media accounts"
        />

        <Box mt="3" display="flex" flexDirection="column" alignItems="center">
          <Heading as="h2" size="md" textAlign="center">
            Let's get your account set up
          </Heading>
          <Button
            mt="4"
            colorScheme="purple"
            paddingY="1.5rem"
            paddingX="4"
            // as={Link}
            // to="/accounts/new"
          >
            Connect Your Accounts
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default NoConnection;
