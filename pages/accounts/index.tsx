import { Box, Flex } from '@chakra-ui/layout';
import {
  Button,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import AccountLayout from '../../components/AccountLayout';

const Accounts = () => {
  return (
    <AccountLayout>
      <Breadcrumb separator=">">
        <BreadcrumbItem fontSize="sm">
          <BreadcrumbLink isCurrentPage textColor="teal.300">
            Accounts
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
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
    </AccountLayout>
  );
};

export default Accounts;
