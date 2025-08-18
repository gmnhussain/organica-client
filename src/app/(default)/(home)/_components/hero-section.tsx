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
    <div className="heroSec container mx-auto mt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={false}
        navigation={false}
        loop={true}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
      >
        <SwiperSlide>
          <Image
            src="/slider/slider1.jpg"
            alt="Hero Image 1"
            width={800}
            height={300}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/slider2.jpg"
            alt="Hero Image 2"
            width={800}
            height={300}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/slider3.jpg"
            alt="Hero Image 3"
            width={800}
            height={300}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
