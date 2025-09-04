'use client';
import React from 'react';
import Image from 'next/image';
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Optional modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const HeroSection = () => {
  return (
    <div className="heroSec">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={false}
        navigation={false}
        loop={true}
        autoplay={{ delay: 7000 }}
      >
        <SwiperSlide>
          <Image
            src="/slider/s1.webp"
            alt="Hero Image 1"
            width={1400}
            height={800}
            className="object-cover w-full h-[150px] md:h-[450px] lg:h-[700px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/s2.webp"
            alt="Hero Image 2"
            width={1400}
            height={800}
            className="object-cover w-full h-[150px] md:h-[450px] lg:h-[700px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/s3.webp"
            alt="Hero Image 3"
            width={1400}
            height={800}
            className="object-cover w-full h-[150px] md:h-[450px] lg:h-[700px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
