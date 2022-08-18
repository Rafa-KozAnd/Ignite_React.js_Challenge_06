import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Continent } from "../../pages";

export const HomeSwiperSlide: React.FC<Continent> = ({
  slug,
  sliderBanner,
  heading,
  description,
}) => (
  <Stack
    align="center"
    justify="center"
    spacing={{ base: 3, lg: 4 }}
    backgroundSize="cover"
    backgroundPosition="center center"
    backgroundRepeat="no-repeat"
    bgColor="black"
    h={{ base: 250, md: 350, xl: 450 }}
    bgImage={`
    linear-gradient(rgb(28 20 1 / 0.35), rgb(28 20 1 / 0.35)),
    url(${sliderBanner})
  `}
  >
    <Link href={`/continent/${slug}`} passHref>
      <ChakraLink
        href="#"
        color="gray.100"
        _hover={{ color: "brand" }}
        fontWeight="bold"
        fontSize={[24, 30, 36, 42, 48]}
      >
        {heading}
      </ChakraLink>
    </Link>

    <Text color="gray.300" fontWeight="bold" fontSize={[14, 16, 19, 22, 24]}>
      {description}
    </Text>
  </Stack>
);
