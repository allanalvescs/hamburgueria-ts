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
import { FiLogOut, FiUser } from "react-icons/fi";
import { useAuth } from "../../Providers/modules/AuthContext";

interface ModalLogoutProps {
  isOpen: boolean;
  onClose(): void;
  singOut(): void;
}

const ModalLogout = ({ isOpen, onClose, singOut }: ModalLogoutProps) => {
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay bg="transparent" />
      <DrawerContent w="355px" ml="auto" mt="80px" position="absolute">
        <DrawerHeader
          borderBottomWidth="1px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="18px"
        >
          <Heading as="h1" fontSize="lg" color="gray.600">
            Sair da minha conta
          </Heading>
          <Center
            color="white"
            bg="gray.400"
            w="45px"
            h="45px"
            borderRadius="100%"
          >
            <FiUser />
          </Center>
        </DrawerHeader>
        <DrawerBody>
          <Center as="button" w="100%" h="80px" onClick={singOut}>
            <Flex
              bg="red.100"
              color="white"
              w="140px"
              h="100%"
              alignItems="center"
              justifyContent="center"
              fontSize="2xl"
              borderRadius="8px"
              fontWeight="bold"
            >
              <FiLogOut />
            </Flex>

            <Box bg="gray.50" h="100%" padding="4">
              <Heading
                as="h3"
                fontSize="sm"
                color="gray.600"
                fontWeight="bold"
                textAlign="start"
              >
                Deseja sair da sua conta ?
              </Heading>
              <Text
                fontSize="x-small"
                textAlign="start"
                color="gray.500"
                fontWeight="semibold"
                mt="2"
              >
                Todas as suas informações ficaram salva quando você sair da sua
                conta.
              </Text>
            </Box>
          </Center>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalLogout;
