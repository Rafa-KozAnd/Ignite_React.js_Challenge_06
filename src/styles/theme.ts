import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  colors: {
    brand: "#FFBA08",
    gray: {
      100: "#F5F8FA", // light headings and text
      300: "#DADADA", // light info
      700: "#999999", // dark info
      900: "#47585B", // dark headings and text
      950: "#18181b", // dark bg
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bgColor: mode("gray.100", "gray.950")(props),
        color: mode("gray.900", "gray.100")(props),
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
    }),
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
});
