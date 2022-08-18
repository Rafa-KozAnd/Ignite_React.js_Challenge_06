import { Flex, Grid, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Fragment } from "react";
import { CityCard } from "../../components/Continent/CityCard";
import continents from "../../data.json";

type ContinentParams = {
  slug: string;
};

export interface City {
  label: string;
  image: string;
  country: {
    code: string;
    label: string;
  };
}

interface ContinentProps {
  heading: string;
  banner: string;
  paragraph: string;
  countriesAmount: number;
  languagesAmount: number;
  cities: City[];
}

export const getStaticPaths: GetStaticPaths<ContinentParams> = () => {
  return {
    fallback: false,
    paths: continents.map(continent => ({
      params: {
        slug: continent.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps<
  ContinentProps,
  ContinentParams
> = ({ params }) => {
  const continentData = continents.find(
    continent => continent.slug === params?.slug,
  );

  if (!continentData) {
    return {
      notFound: true,
    };
  }

  return {
    props: continentData,
  };
};

const Continent: NextPage<ContinentProps> = ({
  heading,
  banner,
  paragraph,
  countriesAmount,
  languagesAmount,
  cities,
}) => (
  <Fragment>
    <Flex
      bgColor="black"
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      h={[150, 250, 350, 450, 500]}
      align="center"
      bgImage={`
        linear-gradient(to top, rgb(0 0 0 / 0.65), rgb(0 0 0 / 0.25)),
        url(${banner})
      `}
    >
      <Flex
        maxW={1160}
        w="100%"
        mx="auto"
        py="60px"
        h="100%"
        px={[4, 5, 6]}
        justifyContent={{ base: "center", md: "start" }}
        alignItems={{ base: "center", md: "end" }}
      >
        <Heading
          as="h1"
          color="gray.100"
          fontWeight="semibold"
          fontSize={[28, 34, 38, 42, 48]}
          lineHeight={1.5}
        >
          {heading}
        </Heading>
      </Flex>
    </Flex>

    <Stack
      maxW={1160}
      mx="auto"
      mt={["24px", "38px", "52px", "66px", "80px"]}
      spacing={["24px", "38px", "52px", "66px", "80px"]}
    >
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        px={[4, 5, 6]}
        gap={4}
      >
        <Stack maxW={600}>
          <blockquote cite="https://www.dentrodahistoria.com.br/blog/educacao/curiosidades-continentes-paises-mundo#h-curiosidades-sobre-os-continentes-da-terra">
            <Text fontWeight="normal" fontSize={[14, 16, 18, 21, 24]}>
              {paragraph}
            </Text>
          </blockquote>
        </Stack>

        <HStack spacing={["30px", "34px", "38px", "42px"]}>
          <Stack
            spacing={{ base: 0, lg: 1 }}
            align={{ base: "left", lg: "center" }}
          >
            <Text
              as="strong"
              color="brand"
              fontSize={[24, 30, 36, 42, 48]}
              fontWeight="semibold"
            >
              {countriesAmount}
            </Text>

            <Text
              as="span"
              fontSize={[18, 20, 22, 24]}
              fontWeight={{ base: "normal", md: "medium", lg: "semibold" }}
            >
              países
            </Text>
          </Stack>

          <Stack
            spacing={{ base: 0, lg: 1 }}
            align={{ base: "left", lg: "center" }}
          >
            <Text
              as="strong"
              color="brand"
              fontSize={[24, 30, 36, 42, 48]}
              fontWeight="semibold"
            >
              {languagesAmount}
            </Text>

            <Text
              as="span"
              fontSize={[18, 20, 22, 24]}
              fontWeight={{ base: "normal", md: "medium", lg: "semibold" }}
            >
              línguas
            </Text>
          </Stack>

          <Stack
            spacing={{ base: 0, lg: 1 }}
            align={{ base: "left", lg: "center" }}
          >
            <Text
              as="strong"
              color="brand"
              fontSize={[24, 30, 36, 42, 48]}
              fontWeight="semibold"
            >
              {cities.length}
            </Text>

            <Text
              as="span"
              fontSize={[18, 20, 22, 24]}
              fontWeight={{ base: "normal", md: "medium", lg: "semibold" }}
              textAlign="center"
            >
              cidades +100
            </Text>
          </Stack>
        </HStack>
      </Flex>

      <Stack spacing={10} px={[4, 5, 6]}>
        <Heading
          as="h2"
          fontSize={[24, 26, 28, 32, 36]}
          lineHeight={1.5}
          fontWeight="medium"
        >
          Cidades +100
        </Heading>

        <Grid
          justifyContent="center"
          gap={["20px", "25px", "30px", "35px", "45px"]}
          templateColumns={[
            "minmax(0, 256px)",
            "repeat(2, minmax(0, 256px))",
            "repeat(3, minmax(0, 256px))",
            "repeat(4, minmax(0, 256px))",
          ]}
        >
          {cities.map(city => (
            <CityCard key={city.label} {...city} />
          ))}
        </Grid>
      </Stack>
    </Stack>
  </Fragment>
);

export default Continent;
