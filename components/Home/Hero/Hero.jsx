import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination ,Autoplay} from "swiper";
import useHomeState from "../../../hooks/state/useHomeState";
import Image from "next/image";
function Hero() {
  const { hero_banners } = useHomeState();

  return (
    <div className="mx-auto mt-2 mb-1">
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Pagination,Autoplay]}
        pagination={{
          clickable: true,
        }}
      >
        {hero_banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="flex justify-center">
              <img src={banner.url} alt="banner logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Hero;
