import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { Logo } from "../Logo";
import { BackButton } from "./BackButton";
import { ThemeButton } from "./ThemeButton";

export const Header: React.FC = () => (
  <Box
    as="header"
    h={["55px", "65px", "80px", "90px", "100px"]}
    position="sticky"
    top={0}
    bgColor="gray.100"
    zIndex={100}
    boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
    px={[4, 5, 6]}
    _dark={{ bgColor: "gray.950" }}
  >
    <Flex
      align="center"
      justify="center"
      h="100%"
      maxW={1160}
      mx="auto"
      position="relative"
    >
      <BackButton />

      <Link href="/" passHref>
        <ChakraLink w={["100px", "125px", "150px", "175px", "184px"]}>
          <Logo />
        </ChakraLink>
      </Link>

      <ThemeButton />
    </Flex>
  </Box>
);
