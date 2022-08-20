import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiTrash } from "react-icons/fi";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { useAuth } from "../../Providers/modules/AuthContext";
import { useProducts } from "../../Providers/modules/ProductsContext";

interface CartProduct {
  image: string;
  title: string;
  category: string;
  price: number;
  id: string;
  quantity: number;
}

interface ProductCartProps {
  product: CartProduct;
}

const ProductCart = ({ product }: ProductCartProps) => {
  const { removeFromCart, loadCart, order } = useProducts();
  const { accessToken, user } = useAuth();

  const handleRemoveItem = () => {
    removeFromCart(product.id, accessToken);
    loadCart(user.id, accessToken);
  };

  const handleOrderMore = () => {
    const newProduct = { quantity: product.quantity + 1, userId: user.id };

    order(product.id, newProduct, accessToken);

    loadCart(user.id, accessToken);
  };

  const handleOrderLess = () => {
    const newProduct = {
      quantity: product.quantity > 1 ? product.quantity - 1 : 1,
      userId: user.id,
    };

    order(product.id, newProduct, accessToken);

    loadCart(user.id, accessToken);
  };

  return (
    <Flex w="100%" h="95px" mb="12px" alignItems="flex-start">
      <Box
        w="82px"
        h="80px"
        bg="gray.100"
        borderRadius="8px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={product.image} w="75%" />
      </Box>
      <HStack spacing="8" h="80px" ml="4" alignItems="flex-start">
        <Box>
          <Heading as="h3" fontSize="ms" color="gray.600">
            {product.title}
          </Heading>
          <HStack borderWidth="1px" borderColor="gray.300" w="136px" mt="3">
            <Button
              bg="gray.100"
              color="red.100"
              w="20%"
              borderRadius="0px"
              onClick={handleOrderLess}
            >
              -
            </Button>
            <Text w="60%" textAlign="center">
              {product.quantity}
            </Text>
            <Button
              bg="gray.100"
              color="red.100"
              w="20%"
              borderRadius="0px"
              onClick={handleOrderMore}
            >
              +
            </Button>
          </HStack>
        </Box>
        <Center
          as="button"
          color="gray.300"
          fontSize="lg"
          onClick={handleRemoveItem}
        >
          <FiTrash />
        </Center>
      </HStack>
    </Flex>
  );
};

export default ProductCart;
