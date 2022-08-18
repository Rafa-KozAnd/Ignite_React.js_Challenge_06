import { Image, Stack, Text } from "@chakra-ui/react";

interface HomeIconProps {
  name: string;
  label: string;
}

export const HomeIcon: React.FC<HomeIconProps> = ({ name, label }) => (
  <Stack alignItems="center" spacing={6} w={["50%", "50%", "33%", "20%"]}>
    <Image
      src={`/images/icons/${name}.svg`}
      alt={name}
      w={[55, 65, 75, 85]}
      h={[55, 65, 75, 85]}
    />

    <Text fontWeight="semibold" fontSize={24} textAlign="center">
      {label}
    </Text>
  </Stack>
);
