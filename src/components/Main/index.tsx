import { Button, Flex, Box } from "@chakra-ui/react";
import { Logo } from "../Logo";

export default function Main() {
  return (
    <Box height="100%" backgroundColor="gray.50" mt={5}>
      <Flex
        width="100%"
        justify="space-between"
        paddingX={10}
        paddingY={7}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Logo />

        <Button size="sm" colorScheme="primary" w="6.25rem">
          Adicionar
        </Button>
      </Flex>
    </Box>
  );
}
