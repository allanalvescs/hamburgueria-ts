import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import ListCart from "../../Pages/Dashboard/ListCart";

import { useProducts } from "../../Providers/modules/ProductsContext";

interface ModalCartProps {
  isOpen: boolean;
  onClose(): void;
}

const ModalCart = ({ isOpen, onClose }: ModalCartProps) => {
  const { cartProducts } = useProducts();
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay bg="transparent" />
      <DrawerContent w="455px" ml="auto" mt="80px" position="absolute">
        <DrawerHeader
          borderBottomWidth="1px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="18px"
          bg="green.300"
          w="100%"
        >
          <Heading as="h1" fontSize="lg" color="white">
            Carrinho de Compras
          </Heading>
        </DrawerHeader>
        <DrawerBody padding="12px">
          {cartProducts.length > 0 ? (
            <ListCart />
          ) : (
            <Flex
              flexDir="column"
              alignItems="center"
              h="50%"
              justifyContent="center"
            >
              <Heading as="h2" color="gray.600" fontSize="lg">
                Sua sacola está vazia
              </Heading>
              <Text color="gray.300" fontSize="sm" mt="2">
                Adicione itens
              </Text>
            </Flex>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalCart;
