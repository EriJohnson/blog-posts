import { Box, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <>
      <Box
        textTransform="uppercase"
        border="1px solid"
        borderColor="gray.500"
        color="gray.500"
        fontSize="xl"
        px={8}
        py={1}
      >
        <Text as="span" fontWeight="bold" color="gray.900">
          Blog
        </Text>
        <Text as="span" ml={1} fontWeight="thin">
          Posts
        </Text>
      </Box>
    </>
  );
}
