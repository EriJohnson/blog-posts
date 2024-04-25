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
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />

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
              placeholder="Adicionar conteúdo do post"
              color="gray.500"
              borderColor="gray.200"
              focusBorderColor="primary.500"
              borderRadius="base"
              fontWeight="normal"
              _hover={{ borderColor: "primary.500" }}
              _placeholder={{ color: "gray.200" }}
              _focus={{ boxShadow: "0px 0px 2px #AFB380" }}
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
          >
            Cancelar
          </Button>

          <Button
            size="sm"
            colorScheme="primary"
            fontWeight="medium"
            w="6.25rem"
          >
            Salvar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
