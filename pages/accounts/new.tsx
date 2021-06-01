import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import { Box, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

function SocialIcon({ type, color }: { type: string; color: string }) {
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

const Connect = () => {

  const accountsList = [
    {
      name: 'Twitter',
      for: 'Profile',
      icon: 'twitter',
      iconColor: 'rgb(85, 172, 238)',
    },
    {
      name: 'Instagram',
      for: 'Business Account',
      icon: 'instagram',
      iconColor: '#E1306C',
    },
    {
      name: 'Facebook',
      for: 'Page or Group',
      icon: 'facebook',
      iconColor: '#3b5998',
    },
  ];

  return (
    <Box paddingX="1rem">
      {/* <Breadcrumb separator=">">
        <BreadcrumbItem isCurrentPage fontSize="sm">
          <BreadcrumbLink as={Link} to="/accounts" textColor="teal.300">
            Accounts
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage fontSize="sm">
          <BreadcrumbLink as={Link} to={url} textColor="teal.300">
            Connect
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb> */}
      <Box mt={6}>
        <Heading as="h2" size="lg">
          Connect a new Account
        </Heading>
      </Box>

      <Stack spacing={6} mt="6" direction="row">
        {accountsList.map((item) => (
          <Box
            w="250px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            boxShadow=".5px .5px 2px .5px rgba(0,0,0,0.2)"
            _hover={{
              borderColor: 'lightblue',
            }}
            key={item.name}
          >
            <Box
              p="4"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
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
        ))}
      </Stack>
    </Box>
  );
};

export default Connect;