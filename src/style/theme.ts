import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    green: {
      50: "#27AE60",
      100: "#27AE60",
      200: "#219653",
      300: "#168821",
    },
    gray: {
      0: "#F5F5F5",
      100: "#E0E0E0",
      200: "#999999",
      300: "#828282",
      400: "#BDBDBD",
      600: "#333333",
    },
    red: {
      100: "#E60000",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },

  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.900",
      },
    },
  },
});
