import { Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { City } from "../../pages/continent/[slug]";

export const CityCard: React.FC<City> = ({ label, image, country }) => (
  <Stack
    bgColor="white"
    borderRadius={4}
    transition="transform 0.3s linear"
    _hover={{ transform: "scale(1.05) translateY(-3%)" }}
    boxShadow="0 0 5px rgb(0 0 0 / 0.1)"
    overflow="hidden"
  >
    <Image
      src={image}
      alt={`Cidade de ${label}`}
      objectFit="cover"
      w="100%"
      h="173px"
      loading="lazy"
    />

    <HStack
      align="center"
      p={[3, 4, 5, 6]}
      justify="space-between"
      border="1px solid"
      borderColor="rgb(255 186 8 / 0.5)"
      mt="0 !important"
      borderTop={0}
      borderBottomRadius={4}
      flex={1}
      spacing={2}
    >
      <Stack spacing={[1, 2, 3]}>
        <Text fontWeight="semibold" fontSize={20} color="gray.900">
          {label}
        </Text>

        <Text fontWeight="medium" fontSize={16} color="gray.700">
          {country.label}
        </Text>
      </Stack>

      <Flex
        minW="30px"
        w="30px"
        h="30px"
        borderRadius="full"
        boxShadow="0 0 7px rgb(0 0 0 / 0.2)"
        align="center"
        justify="center"
        overflow="hidden"
      >
        <ReactCountryFlag
          svg
          countryCode={country.code}
          aria-label={country.label}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Flex>
    </HStack>
  </Stack>
);
