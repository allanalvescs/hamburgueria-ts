import { useProducts } from "../../Providers/modules/ProductsContext";

import { Flex, Heading, Text } from "@chakra-ui/react";
import ProductCart from "../../components/Card/ProductCart";

const ListCart = () => {
  const { cartProducts } = useProducts();

  const initialValue = 0;
  const totalCart = cartProducts.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.quantity * currentValue.price,
    initialValue
  );
  return (
    <>
      <Flex flexDir="column" h="55%" overflowY="scroll">
        {cartProducts.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </Flex>
      <Flex
        borderTopWidth="2px"
        borderColor="gray.400"
        padding="12px 0px"
        justifyContent="space-between"
      >
        <Heading fontSize="lg">Total: </Heading>

        <Text>
          {totalCart.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </Flex>
    </>
  );
};

export default ListCart;
