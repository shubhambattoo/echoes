import {
  Box,
  Container,
  Flex,
  Grid,
  StackDivider,
  VStack,
} from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaThLarge } from 'react-icons/fa';

const Accounts = () => {
  return (
    <>
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
              <Grid
                templateColumns="30px auto"
                gap={2}
                borderBottom="3px solid"
                borderColor="blue.500"
                paddingBottom="10px"
                // as={Link}
                // to={path}
              >
                <FaThLarge />
                <Box>Accounts</Box>
              </Grid>
            </VStack>
          </Box>
          <Box padding="1rem">
            {/* <Breadcrumb separator=">">
        <BreadcrumbItem isCurrentPage fontSize="sm">
          <BreadcrumbLink as={Link} to={url} textColor="teal.300">
            Accounts
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb> */}
            <Box mt={3} width="700px">
              <Flex justify="space-between" align="center" my={3}>
                <Box fontWeight="300">Your Accounts</Box>
                <Link href="/accounts/new" passHref>
                  <Button
                    borderRadius="22px"
                    fontSize="13px"
                    bgColor="blue.200"
                    fontWeight="300"
                  >
                    Add New Account
                  </Button>
                </Link>
              </Flex>
              <Divider />
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Accounts;
