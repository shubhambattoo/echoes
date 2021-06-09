import {
  Box,
  Divider,
  Flex,
  StackDivider,
  Stack,
  VStack,
  WrapItem,
} from '@chakra-ui/layout';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton';

const DashboardLoading = () => {
  return (
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
        <SkeletonText noOfLines={1} pb={2} />

        <Divider borderColor="gray.200" />

        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          mt={4}
        >
          {[1, 2, 3].map((num) => (
            <Stack
              padding="8px"
              borderStyle="solid"
              borderWidth={1}
              borderColor="gray.500"
              borderRadius="4px"
              alignItems="center"
              direction="row"
              bg="#fff"
              color="white"
              key={num}
            >
              <Box>
                <SkeletonCircle size="10" />
              </Box>
              <Box width="150px">
                <SkeletonText noOfLines={2} />
              </Box>
            </Stack>
          ))}
        </VStack>
      </Box>
      <Box flexBasis="58rem" w="58rem" ml="3">
        <Skeleton height="50px" />
        <Skeleton height="150px" mt="5" mb="5" />
        <Skeleton height="50px" />
      </Box>
    </Flex>
  );
};

export default DashboardLoading;
