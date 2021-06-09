import { Avatar } from '@chakra-ui/avatar';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  StackDivider,
  VStack,
  WrapItem,
} from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import DashboardLoading from '../components/DashboardLoading';
import Layout from '../components/Layout';
import NoConnection from '../components/NoConnection';
import PvtRoute from '../components/PvtRoute';
import { useAuth } from '../contexts/auth';
import useUsers from '../lib/useUsers';
import { Status } from '../utils/enums';

const Dashboard: React.FC = () => {
  const [state, setState] = useState({
    accounts: [],
    status: Status.IDLE,
  });
  const { loading, authUser } = useAuth();
  const { getUser } = useUsers();

  useEffect(() => {
    if (!loading && authUser) {
      setState((prev) => ({ ...prev, status: Status.PENDING }));
      getUser(authUser.email).then((user) => {
        setState((prev) => ({
          ...prev,
          status: Status.SUCCESS,
          accounts: user.accountsConnected,
        }));
      });
    }
  }, [authUser, loading]);

  return (
    <Layout>
      <PvtRoute>
        {state.status === Status.PENDING || state.status === Status.IDLE ? (
          <Container maxW="100vw" mt={6} paddingX="1.5rem">
            <DashboardLoading />
          </Container>
        ) : state.status === Status.SUCCESS ? (
          <Container maxW="100vw" mt={6} paddingX="1.5rem">
            {state.accounts.length > 0 ? (
              <Flex>
                <Box
                  as="aside"
                  flexBasis="18rem"
                  w="18rem"
                  borderRight="1px solid"
                  borderColor="gray.200"
                  paddingRight="1.5rem"
                  minHeight="80vh"
                >
                  <Heading as="h4" size="md" pb={2}>
                    Accounts
                  </Heading>
                  <Divider borderColor="gray.200" />

                  <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={4}
                    align="stretch"
                    mt={4}
                  >
                    <Stack
                      padding="8px"
                      borderStyle="solid"
                      borderWidth={2}
                      borderColor="gray.500"
                      borderRadius="4px"
                      alignItems="center"
                      direction="row"
                      cursor="pointer"
                      bg="#55acee"
                      color="white"
                    >
                      <WrapItem>
                        <Avatar
                          name="Dan Abrahmov"
                          size="sm"
                          src="https://bit.ly/dan-abramov"
                        />
                      </WrapItem>
                      <Box fontSize="13.5px" fontWeight="500">
                        Dan Abrahmov
                      </Box>
                    </Stack>

                    <Stack
                      padding="8px"
                      borderStyle="dotted"
                      borderWidth={2}
                      borderColor="gray.500"
                      borderRadius="4px"
                      alignItems="center"
                      direction="row"
                      cursor="pointer"
                    >
                      <WrapItem>
                        <Avatar
                          name="Dan Abrahmov"
                          size="sm"
                          src="https://bit.ly/dan-abramov"
                        />
                      </WrapItem>
                      <Box fontSize="13.5px" fontWeight="500">
                        Dan Abrahmov
                      </Box>
                    </Stack>
                  </VStack>
                </Box>
                <Box></Box>
              </Flex>
            ) : (
              <NoConnection />
            )}
          </Container>
        ) : null}
      </PvtRoute>
    </Layout>
  );
};

export default Dashboard;
