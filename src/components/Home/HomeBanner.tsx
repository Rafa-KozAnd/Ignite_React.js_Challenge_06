import {
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from "@chakra-ui/react";
  
  export const HomeBanner: React.FC = () => {
    const isLargeBreakpoing = useBreakpointValue({
      base: false,
      lg: true,
    });
  
    return (
      <Flex
        backgroundImage="url(/images/home-banner.png)"
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        bgColor="black"
        h={{ base: "auto", sm: 270, lg: 370 }}
        align="center"
      >
        <Flex
          maxW={1160}
          w="100%"
          mx="auto"
          align="center"
          justify="space-between"
          py={6}
          px={{ base: 4, lg: 6 }}
          textAlign={{ base: "left", sm: "center", lg: "left" }}
        >
          <Stack spacing={5} w={{ base: "100%", lg: "auto" }}>
            <Heading
              as="h1"
              color="gray.100"
              fontWeight="medium"
              fontSize={[20, 24, 28, 32, 36]}
              lineHeight={1.5}
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>
  
            <Text
              fontWeight="normal"
              color="gray.300"
              fontSize={[14, 16, 18, 18, 20]}
              lineHeight={1.5}
            >
              Chegou a hora de tirar do papel a viagem que você <br /> sempre
              sonhou.
            </Text>
          </Stack>
  
          {isLargeBreakpoing && (
            <Box transform="translateY(25%)">
              <Image src="/images/airplane.svg" alt="Avião e nuvens" />
            </Box>
          )}
        </Flex>
      </Flex>
    );
  };
  