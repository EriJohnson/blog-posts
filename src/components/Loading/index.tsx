import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center>
      <Spinner size="xl" color="primary.500" marginY="8rem" />
    </Center>
  );
}
