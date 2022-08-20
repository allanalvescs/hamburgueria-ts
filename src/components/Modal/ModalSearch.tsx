import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../Providers/modules/AuthContext";
import { useProducts } from "../../Providers/modules/ProductsContext";
import Input from "../Form/Input";

interface ModalSearchProps {
  isOpen: boolean;
  onClose(): void;
}

const ModalSearch = ({ isOpen, onClose }: ModalSearchProps) => {
  const [value, setValue] = useState("");
  const { SearchProducts } = useProducts();
  const { accessToken } = useAuth();

  const handleSearch = () => {
    SearchProducts(value, accessToken);
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay bg="transparent" margin="auto" />
      <ModalContent
        position="absolute"
        top="0%"
        mt="2"
        borderWidth="2px"
        borderColor="gray.600"
      >
        <ModalHeader padding="8px 32px">Pesquisa</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <Flex
            as="form"
            bg="white"
            h="62px"
            alignItems="center"
            borderRadius="6px"
            w="100%"
          >
            <Input
              name={value}
              placeholder="Digitar Pesquisa"
              border="none"
              mt="0"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />

            <Button
              ml="2"
              h="40px"
              w="53px"
              color="white"
              bg="green.100"
              _hover={{ bg: "green.300" }}
              onClick={handleSearch}
            >
              <FiSearch />
            </Button>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Text fontSize="x-small" w="100%" color="gray.200">
            Você consegui filtrar os produtos pela categoria
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSearch;
