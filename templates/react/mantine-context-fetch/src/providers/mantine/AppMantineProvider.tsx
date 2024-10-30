import "@mantine/core/styles.css";

import { PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";

import { theme } from "@/theme";

export default function AppMantineProvider({ children }: PropsWithChildren) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
