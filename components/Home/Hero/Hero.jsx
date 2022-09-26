import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { useHomeState } from "../../../hooks";
function Hero() {
  const { hero_banners } = useHomeState();

  return (
    <div className="mx-auto mt-2 mb-1">
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
      >
        {hero_banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-64 md:h-96 lg:h-[32rem]">
              <Image
                src={banner.url}
                layout="fill"
                objectFit="contain"
                sizes="(max-width:576px) 100vw,"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Hero;
