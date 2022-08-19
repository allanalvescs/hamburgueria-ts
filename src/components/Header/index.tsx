import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { useProducts } from "../../Providers/modules/ProductsContext";
import SearchBox from "../Form/SearchBox";

interface HeaderProps {
  onModalLogoutOpen(): void;
}

const Header = ({ onModalLogoutOpen }: HeaderProps) => {
  const { cartProducts } = useProducts();
  return (
    <Flex
      as="header"
      paddingX={["12px", "12px", "62px", "62px"]}
      paddingY="12px"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      h="80px"
      bg="gray.100"
    >
      <Heading
        color="gray.600"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={["lg", "3xl"]}
      >
        Burguer{" "}
        <Text color="red.100" fontSize={["md", "2xl"]} ml="2">
          Kenzie
        </Text>
      </Heading>

      <Flex
        alignItems="center"
        justifyContent="space-around"
        w={["300px", "300px", "500px", "500px"]}
      >
        <SearchBox />

        <Center
          as="button"
          display={["flex", "flex", "none", "none"]}
          color="gray.400"
          bg="transparent"
          fontSize="2xl"
          alignItems="center"
          position="relative"
          w="50px"
          h="50px"
          transition="0.5s all"
          _hover={{ color: "green.200" }}
        >
          <FiSearch />
        </Center>

        <Center
          as="button"
          color="gray.400"
          bg="transparent"
          fontSize="2xl"
          position="relative"
          w="50px"
          h="50px"
          transition="0.5s all"
          _hover={{ color: "green.200" }}
        >
          <FaShoppingCart />
          <Box
            bg="green.300"
            color="white"
            w="20px"
            h="24px"
            fontSize="sm"
            borderRadius="8px"
            fontWeight="bold"
            position="absolute"
            left="28px"
            top="0px"
          >
            {cartProducts.length}
          </Box>
        </Center>

        <Center
          as="button"
          color="gray.400"
          bg="transparent"
          fontSize="2xl"
          w="50px"
          h="50px"
          transition="0.5s all"
          _hover={{ color: "green.200" }}
          onClick={onModalLogoutOpen}
        >
          <FiLogOut />
        </Center>
      </Flex>
    </Flex>
  );
};

export default Header;
