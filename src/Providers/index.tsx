import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./modules/AuthContext";

import { ReactNode } from "react";

import { theme } from "../style/theme";
import { PorductsProvider } from "./modules/ProductsContext";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <PorductsProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </PorductsProvider>
    </AuthProvider>
  );
};

export default Providers;
