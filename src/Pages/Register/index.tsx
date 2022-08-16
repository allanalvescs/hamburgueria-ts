import {
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Link,
  VStack,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/Form/Input";
import RegisterInfor from "./RegisterInfor";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const RegisterSchema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
  email: yup.string().required("Campo Obrigatório *").email("Email inválido!"),
  password: yup
    .string()
    .required("Campo Obrigatório *")
    .min(6, "Minimo de 6 caracteres"),
  confirm_password: yup
    .string()
    .required("Campo Obrigatório *")
    .oneOf([yup.ref("password")], "Senhas Diferentes"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(RegisterSchema),
  });

  const handleSubmitData = (data: FormData) => console.log(data);
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100%"
      flexDir={["column", "column", "row", "row"]}
      bgGradient="linear(to-r,green.100 65%, white 25%)"
    >
      <RegisterInfor />
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
        <Center justifyContent="space-between">
          <Heading as="h3" fontSize="lg" color="gray.600">
            Cadastrar
          </Heading>
          <Link
            borderBottomWidth="2px"
            borderBottomColor="gray.500"
            color="gray.500"
            fontWeight="bold"
            _hover={{ cursor: "pointer", textDecoration: "none" }}
          >
            Ir para o login
          </Link>
        </Center>

        <VStack mt="4" spacing="5">
          <Input
            placeholder="Digite seu Nome"
            type="text"
            label="Nome"
            error={errors.name}
            {...register("name")}
          />
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
          <Input
            placeholder="Confirme sua Senha"
            type="password"
            label="Confirma Senha"
            error={errors.confirm_password}
            {...register("confirm_password")}
          />
        </VStack>

        <Button
          w="100%"
          h="60px"
          mt="4"
          borderRadius="6px"
          color="gray.400"
          bg="gray.50"
          _hover={{ bg: "gray.100" }}
          type="submit"
        >
          Cadastrar
        </Button>
      </Grid>
    </Flex>
  );
};

export default Register;
