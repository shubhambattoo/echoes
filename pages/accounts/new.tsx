import { Box, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import AccountLayout from '../../components/AccountLayout';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import PvtRoute from '../../components/PvtRoute';
import { Account, getTokenAPIRes, SocialIconType } from '../../types';
import { request } from '../../lib/request';

function SocialIcon({ type, color }: SocialIconType) {
  const fontsize = '40px';
  if (type === 'twitter') {
    return <FaTwitterSquare color={color} fontSize={fontsize} />;
  } else if (type === 'facebook') {
    return <FaFacebookSquare color={color} fontSize={fontsize} />;
  } else if (type === 'instagram') {
    return <FaInstagramSquare color={color} fontSize={fontsize} />;
  } else {
    return null;
  }
}

function AccountBox({ item }: { item: Account }) {
  const options = {
    Twitter: async function () {
      try {
        const res: getTokenAPIRes = await request('api/getToken', {
          method: 'POST',
        });
        const oauthToken = res.data.oauth_token;
        const url =
          'https://api.twitter.com/oauth/authenticate?oauth_token=' +
          oauthToken;
        window.location.href = url;
      } catch (error) {
        console.log(error);
      }
    },
    Facebook: () => false,
    Instagram: () => false,
  };

  const handleConnect = () => {
    const fn = options[item.name];
    fn && fn();
  };

  return (
    <Box
      w="250px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor={item.isAvailable ? 'pointer' : 'auto'}
      boxShadow=".5px .5px 2px .5px rgba(0,0,0,0.2)"
      _hover={{
        borderColor: 'lightblue',
      }}
      opacity={item.isAvailable ? 1 : '.7'}
      background={
        !item.isAvailable
          ? 'repeating-linear-gradient( 45deg, #f2f2f2, #f2f2f2 15px, #ddd 15px, #ddd 30px)'
          : '#fff'
      }
      onClick={handleConnect}
    >
      <Box p="4" display="flex" flexDirection="column" alignItems="center">
        <SocialIcon type={item.icon} color={item.iconColor} />
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          fontSize="xl"
        >
          {item.name}
        </Box>
        <Box mt="1" color="gray.600" fontSize="sm">
          {item.for}
        </Box>

        <Box mt="6" color="gray.600" fontSize="md">
          Connect
        </Box>
      </Box>
    </Box>
  );
}

const Connect = () => {
  const { pathname } = useRouter();
  const accountsList: Account[] = [
    {
      name: 'Twitter',
      for: 'Profile',
      icon: 'twitter',
      iconColor: 'rgb(85, 172, 238)',
      isAvailable: true,
    },
    {
      name: 'Instagram',
      for: 'Business Account',
      icon: 'instagram',
      iconColor: '#E1306C',
      isAvailable: false,
    },
    {
      name: 'Facebook',
      for: 'Page or Group',
      icon: 'facebook',
      iconColor: '#3b5998',
      isAvailable: false,
    },
  ];

  return (
    <PvtRoute>
      <AccountLayout>
        <Breadcrumb separator=">">
          <BreadcrumbItem fontSize="sm">
            <BreadcrumbLink
              as={Link}
              href={pathname.substring(0, 9)}
              textColor="teal.300"
            >
              Accounts
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage fontSize="sm">
            <BreadcrumbLink textColor="teal.300">New</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box>
          <Box mt={6}>
            <Heading as="h2" size="lg">
              Connect a new Account
            </Heading>
          </Box>

          <Stack spacing={6} mt="6" direction="row">
            {accountsList.map((item: Account) => (
              <AccountBox item={item} key={item.name} />
            ))}
          </Stack>
        </Box>
      </AccountLayout>
    </PvtRoute>
  );
};

export default Connect;
