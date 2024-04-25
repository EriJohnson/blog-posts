import { ChangeEvent, FormEvent, useState } from "react";
import { usePostContext } from "../../hooks/usePostContext";
import { Post } from "../../types/Post";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

interface PostDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PostDrawer({ isOpen, onClose }: PostDrawerProps) {
  const { addPost, isSubmitting } = usePostContext();

  const [post, setPost] = useState<Post>({
    title: "",
    body: "",
    userId: 1,
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setPost((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await addPost(post);

    onClose();
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />

      <form onSubmit={handleSubmit}>
        <DrawerContent>
          <DrawerHeader color="primary.500" textTransform="uppercase">
            <HStack justify="space-between">
              <Heading fontSize="xl">Criar Post</Heading>

              <DrawerCloseButton
                color="primary.500"
                position="static"
                sx={{ svg: { boxSize: 5 } }}
              />
            </HStack>
          </DrawerHeader>

          <DrawerBody border="1px solid" borderColor="gray.300">
            <FormControl display="flex" alignItems="center" gap={3} mt={4}>
              <FormLabel margin={0}>Título</FormLabel>
              <Input
                name="title"
                value={post.title}
                onChange={handleChange}
                placeholder="Adicionar título"
                color="gray.500"
                borderColor="gray.200"
                focusBorderColor="primary.500"
                borderRadius="base"
                fontWeight="normal"
                _placeholder={{ color: "gray.200" }}
              />
            </FormControl>

            <FormControl display="flex" alignItems="start" gap={3} mt={8}>
              <FormLabel margin={0}>Conteúdo</FormLabel>
              <Textarea
                name="body"
                value={post.body}
                onChange={handleChange}
                placeholder="Adicionar conteúdo do post"
                color="gray.500"
                borderColor="gray.200"
                focusBorderColor="primary.500"
                borderRadius="base"
                fontWeight="normal"
                _placeholder={{ color: "gray.200" }}
                minHeight="14rem"
              />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button
              size="sm"
              variant="outline"
              mr={3}
              onClick={onClose}
              colorScheme="gray"
              color="gray.500"
              borderColor="gray.200"
              fontWeight="normal"
              w="6.25rem"
              isDisabled={isSubmitting}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              size="sm"
              colorScheme="primary"
              fontWeight="medium"
              w="6.25rem"
              isLoading={isSubmitting}
            >
              Salvar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  );
}
