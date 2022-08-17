import { Button, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/Form/Input";
import LoginInfor from "./LoginInfor";
import { useAuth } from "../../Providers/modules/AuthContext";
import { useHistory } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().required("Campo Obrigatório *").email("Email inválido!"),
  password: yup
    .string()
    .required("Campo Obrigatório *")
    .min(6, "Minimo de 6 caracteres"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const { singIn, loading } = useAuth();
  const history = useHistory();

  const handleSubmitData = (data: FormData) => {
    singIn(data);
  };
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100%"
      flexDir={["column-reverse", "column-reverse", "row", "row"]}
      bgGradient="linear(to-r,green.100 65%, white 25%)"
    >
      <Grid
        as="form"
        onSubmit={handleSubmit(handleSubmitData)}
        w={["355px", "355px", "500px", "500px"]}
        boxShadow="base"
        borderWidth="2px"
        borderColor="gray.100"
        paddingY="6"
        paddingX="10"
        mt={["6", "6", "0", "0"]}
        bg="white"
      >
        <Heading as="h3" fontSize="lg">
          Login
        </Heading>

        <VStack mt="4" spacing="5">
          <Input
            placeholder="Digite seu Email"
            type="email"
            label="Email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            label="Senha"
            placeholder="Digite sua Senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />
        </VStack>

        <VStack mt="6">
          <Button
            isLoading={loading}
            w="100%"
            h="60px"
            borderRadius="6px"
            color="white"
            bg="green.200"
            _hover={{ bg: "green.300" }}
            type="submit"
          >
            Logar
          </Button>
          <Text fontSize="md" color="gray.200" textAlign="center">
            Crie sua conta para saborear muitas delícias <br /> e matar sua
            fome!
          </Text>
          <Button
            w="100%"
            h="60px"
            borderRadius="6px"
            color="gray.200"
            bg="gray.100"
            _hover={{ bg: "gray.50" }}
            type="button"
            onClick={() => history.push("/register")}
          >
            Cadastrar
          </Button>
        </VStack>
      </Grid>

      <LoginInfor />
    </Flex>
  );
};

export default Login;
