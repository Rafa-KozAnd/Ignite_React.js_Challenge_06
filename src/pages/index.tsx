import { Box, Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import { Fragment } from "react";
import { HomeBanner } from "../components/Home/HomeBanner";
import { HomeIcon } from "../components/Home/HomeIcon";
import { HomeSwiper } from "../components/Home/HomeSwiper";
import continents from "../data.json";

export interface Continent {
  slug: string;
  heading: string;
  description: string;
  sliderBanner: string;
}

interface HomeProps {
  continents: Continent[];
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: {
      continents: continents.map(continent => ({
        slug: continent.slug,
        heading: continent.heading,
        description: continent.description,
        sliderBanner: continent.sliderBanner,
      })),
    },
  };
};

const Home: NextPage<HomeProps> = ({ continents }) => (
  <Fragment>
    <HomeBanner />

    <Flex
      flexWrap="wrap"
      maxW={1160}
      mx="auto"
      px={4}
      mt={["36px", "48px", "60px", "100px", "114px"]}
      alignItems="center"
      justifyContent="center"
      rowGap={8}
    >
      <HomeIcon name="cocktail" label="vida noturna" />
      <HomeIcon name="surf" label="praia" />
      <HomeIcon name="building" label="moderno" />
      <HomeIcon name="museum" label="clássico" />
      <HomeIcon name="earth" label="e mais..." />
    </Flex>

    <Box
      bgColor="gray.900"
      h={{ base: "px", xl: "2px" }}
      mt={["36px", "48px", "60px", "70px", "80px"]}
      w={["60px", "70px", "80px", "90px"]}
      mx="auto"
    />

    <Heading
      className="heading"
      as="h2"
      my={["24px", "32px", "40px", "46px", "52px"]}
      fontWeight="medium"
      textAlign="center"
      fontSize={[20, 24, 28, 32, 36]}
      lineHeight={1.625}
    >
      Vamos nessa? <br /> Então escolha seu continente
    </Heading>

    <Box maxW={1240} mx="auto">
      <HomeSwiper continents={continents} />
    </Box>
  </Fragment>
);

export default Home;
