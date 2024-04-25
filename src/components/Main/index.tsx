import { Box, Button, Flex } from "@chakra-ui/react";
import { usePostContext } from "../../hooks/usePostContext";
import Loading from "../Loading";
import { Logo } from "../Logo";
import PostTable from "../PostTable";

export default function Main() {
  const { isLoading, posts } = usePostContext();

  console.log("posts", posts);

  return (
    <Box backgroundColor="gray.50" mt={5} paddingBottom={5}>
      <Flex
        width="100%"
        align={"center"}
        justify="space-between"
        paddingX={10}
        paddingY={6}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Logo />

        <Button size="sm" colorScheme="primary" w="6.25rem">
          Adicionar
        </Button>
      </Flex>

      <Box paddingX={10}>
        {isLoading ? <Loading /> : <PostTable posts={posts} />}
      </Box>
    </Box>
  );
}
