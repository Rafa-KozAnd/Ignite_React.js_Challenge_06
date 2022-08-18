import { Box } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Continent } from "../../pages";
import { HomeSwiperSlide } from "./HomeSwiperSlide";

interface HomeSwiperProps {
  continents: Continent[];
}

export const HomeSwiper: React.FC<HomeSwiperProps> = ({ continents }) => (
  <Box borderRadius={{ xl: 4 }} overflow="hidden">
    <Swiper
      loop
      navigation
      speed={750}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.slug}>
          <HomeSwiperSlide {...continent} />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);
