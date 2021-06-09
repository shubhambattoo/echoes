import {
  Box,
  Container,
  Flex,
  Grid,
  StackDivider,
  VStack,
} from '@chakra-ui/layout';
import Link from 'next/link';
import { ReactNode } from 'react';
import { FaThLarge } from 'react-icons/fa';
import Layout from './Layout';

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <Container maxW="100vw" mt={6} paddingX="1.5rem">
        <Flex>
          <Box
            as="aside"
            flexBasis="200px"
            w="200px"
            borderRight="1px solid"
            borderColor="gray.200"
            paddingRight="1.5rem"
            minHeight="80vh"
          >
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
              mt={4}
            >
              "
              <Link href="/accounts" passHref>
                <Grid
                  templateColumns="30px auto"
                  gap={2}
                  borderBottom="3px solid"
                  borderColor="blue.500"
                  paddingBottom="10px"
                  cursor="pointer"
                >
                  <FaThLarge />
                  <Box>Accounts</Box>
                </Grid>
              </Link>
            </VStack>
          </Box>
          <Box padding="1rem">{children}</Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default AccountLayout;
