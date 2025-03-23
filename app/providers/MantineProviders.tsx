"use client";

import { MantineProvider as Provider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  primaryColor: "blue",
  fontFamily: "Inter, sans-serif",
  components: {
    Button: {
      defaultProps: {
        size: "md",
      },
    },
  },
});

export function MantineProvider({ children }: { children: React.ReactNode }) {
  return <Provider theme={theme}>{children}</Provider>;
}
