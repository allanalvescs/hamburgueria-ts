import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "../../Providers/modules/AuthContext";
import { useProducts } from "../../Providers/modules/ProductsContext";

interface Product {
  image: string;
  title: string;
  category: string;
  price: number;
}

interface ProductsProps {
  product: Product;
}

const Products = ({
  product: { title, image, category, price },
}: ProductsProps) => {
  const { addToCart } = useProducts();
  const { accessToken, user } = useAuth();

  const handleAddToCart = () => {
    const newData = {
      title,
      image,
      category,
      price,
      quantity: 1,
      userId: user.id,
    };
    addToCart(newData, accessToken);
  };
  return (
    <Flex
      w="300px"
      flexDir="column"
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="6px"
      transition="ease-out .6s"
      _hover={{ borderColor: "green.300" }}
    >
      <Box
        h="150px"
        w="100%"
        bg="gray.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={image} />
      </Box>

      <VStack
        mt="4"
        spacing="5"
        padding="24px 18px"
        display="flex"
        flexDir="column"
        alignItems="flex-start"
      >
        <Heading as="h3" color="gray.600" fontSize="lg">
          {title}
        </Heading>
        <Text color="gray.300" fontSize="md">
          {category}
        </Text>

        <Text color="green.300" fontSize="lg" fontWeight="semibold">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>

        <Button
          bg="gray.200"
          color="white"
          w="106px"
          h="40px"
          borderRadius="8px"
          transition="ease-out .6s"
          _hover={{ bg: "green.300" }}
          fontSize="sm"
          onClick={handleAddToCart}
        >
          Adicionar
        </Button>
      </VStack>
    </Flex>
  );
};

export default Products;
