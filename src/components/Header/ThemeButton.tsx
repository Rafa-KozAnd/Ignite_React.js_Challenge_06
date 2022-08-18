import { Flex, Icon, useColorMode } from "@chakra-ui/react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const ThemeButton: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      as="button"
      align="center"
      justify="center"
      position="absolute"
      right={0}
      w="2vw"
      maxW={3}
      color="gray.900"
      _dark={{ color: "gray.100" }}
      onClick={toggleColorMode}
    >
      <Icon
        as={colorMode === "dark" ? IoSunnyOutline : IoMoonOutline}
        fontSize={[20, 22, 24, 26, 28]}
      />
    </Flex>
  );
};
