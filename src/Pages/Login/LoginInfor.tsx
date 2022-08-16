import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";

const LoginInfor = () => {
  return (
    <Box
      ml={["0", "0", "8", "8"]}
      w={["355px", "355px", "377px"]}
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      h="auto"
    >
      <Heading
        color="gray.600"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Burguer{" "}
        <Text color="red.100" fontSize="2xl" ml="2">
          Kenzie
        </Text>
      </Heading>

      <Flex
        mt="4"
        alignItems="center"
        paddingX="4"
        paddingY="6"
        borderWidth="2px"
        borderColor="gray.100"
        borderRadius="5px"
      >
        <Center
          bg="#27AE601A"
          borderRadius="5px"
          color="green.300"
          w="90px"
          h="60px"
        >
          <FiShoppingBag size="20px" />
        </Center>

        <Text ml="2" fontSize="sm" color="gray.300">
          A vida é como um sanduíche, é preciso recheá-la com os
          <b> melhores </b> <br />
          ingredientes.
        </Text>
      </Flex>

      <Grid
        mt="6"
        templateColumns="repeat(6,1fr)"
        gap={6}
        display={["none", "none", "grid", "grid"]}
      >
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
        <Box w="10px" h="10px" borderRadius="100%" bg="gray.100" />
      </Grid>
    </Box>
  );
};

export default LoginInfor;
