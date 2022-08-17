import { Box, Button } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import Input from "./Input";

const SearchBox = () => {
  return (
    <Box
      as="form"
      bg="white"
      h="62px"
      alignItems="center"
      padding="4"
      borderRadius="6px"
      display={["none", "none", "flex", "flex"]}
    >
      <Input name="name" placeholder="Digitar Pesquisa" border="none" />

      <Button
        ml="2"
        h="40px"
        w="53px"
        color="white"
        bg="green.100"
        _hover={{ bg: "green.300" }}
      >
        <FiSearch />
      </Button>
    </Box>
  );
};

export default SearchBox;
