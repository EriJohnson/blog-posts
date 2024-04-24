import { Flex, Heading, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      direction="column"
      justify="center"
      backgroundColor="primary.50"
      width="100%"
      height="9rem"
      paddingX={10}
      paddingY={4}
      color="white"
    >
      <Heading as="h1" fontSize="6xl" color="primary.500">
        Logaroo
      </Heading>

      <Text mt={1} fontWeight="bold" textTransform="uppercase" color="gray.900">
        [Teste] Front-End
      </Text>
    </Flex>
  );
}
