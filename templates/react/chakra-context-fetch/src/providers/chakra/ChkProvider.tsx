import { PropsWithChildren } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export default function ChkProvider({ children }: PropsWithChildren) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
