import { Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoChevronBack } from "react-icons/io5";

export const BackButton: React.FC = () => {
  const { asPath } = useRouter();

  if (asPath === "/") {
    return null;
  }

  return (
    <Link href="/" passHref>
      <Flex
        as="a"
        align="center"
        justify="center"
        position="absolute"
        left={0}
        w="2vw"
        maxW={3}
        color="gray.900"
        _dark={{ color: "gray.100" }}
      >
        <Icon as={IoChevronBack} fontSize={[20, 23, 26, 29, 32]} />
      </Flex>
    </Link>
  );
};
