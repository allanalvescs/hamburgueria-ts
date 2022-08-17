import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./modules/AuthContext";

import { ReactNode } from "react";

import { theme } from "../style/theme";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AuthProvider>
  );
};

export default Providers;
