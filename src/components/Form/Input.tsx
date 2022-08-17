import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useCallback } from "react";

import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

type VariantionOptions = {
  [key: string]: string;
};

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
  error?: null | FieldError;
}

const InputVariation: VariantionOptions = {
  error: "red.100",
  default: "gray.300",
  focus: "gray.600",
  filled: "green.100",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup flexDir="column" h="65px" w="100%" position="relative">
        {label && (
          <FormLabel
            color="gray.500"
            fontSize="xs"
            position="absolute"
            top="-2"
            left="5"
            zIndex="10"
            bg="gray.50"
            fontWeight="semibold"
            paddingX="2"
          >
            {label}
          </FormLabel>
        )}

        <ChakraInput
          {...rest}
          name={name}
          ref={ref}
          variant="outline"
          onChangeCapture={(event) => setValue(event.currentTarget.value)}
          fontSize="sm"
          borderWidth="2px"
          onBlurCapture={handleInputBlur}
          onFocus={handleInputFocus}
          borderColor={InputVariation[variation]}
          bg="gray.50"
          h="65px"
        />
      </InputGroup>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export default Input;
