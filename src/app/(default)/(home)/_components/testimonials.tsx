'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

const testimonials = [
  {
    img: '/feedback/jiaur.jpg',
    text: 'আপনাদের থেকে আমি কফেকাবার টি নিয়েছি। আপনাদের টি টা খুব ভালো লেগেছে। দাম আর টেস্ট সব ঠিক আছে কিন্তু প্রাইস টা একটু বেশি।',
    name: 'জিয়াউর রহমান',
    role: 'ইঞ্জিনিয়ার',
  },
  {
    img: '/feedback/nazmul.jpg',
    text: 'আপনাদের থেকে আমি কফেকাবার টি নিয়েছি। আপনাদের টি টা খুব ভালো লেগেছে। দাম আর টেস্ট সব ঠিক আছে কিন্তু প্রাইস টা একটু বেশি।',
    name: 'নাজমুল হোসাইন',
    role: 'ইঞ্জিনিয়ার',
  },
  {
    img: '/feedback/ananta.jpg',
    text: 'আপনাদের থেকে আমি কফেকাবার টি নিয়েছি। আপনাদের টি টা খুব ভালো লেগেছে। দাম আর টেস্ট সব ঠিক আছে কিন্তু প্রাইস টা একটু বেশি।',
    name: 'অনন্ত কুমার',
    role: 'ভিজুয়ালাইজার',
  },
];

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="bg-[#F8F7F5] py-20">
      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-14">
          কাস্টমার রিভিউ
        </h2>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-[-20px] bottom-23 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 text-gray-400 hover:text-gray-700 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="absolute right-[-20px] bottom-23 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 text-gray-400 hover:text-gray-700 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          onInit={(swiper) => {
            if (typeof swiper.params.navigation !== 'boolean') {
              const navigation = swiper.params.navigation as any;
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="p-0"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl px-6 py-8 mx-3 my-6 flex items-center gap-5 h-full shadow-[0px_8px_15px_0px_rgba(0,0,0,0.07)]">
                {/* Left Side - Image */}
                <Image
                  width={170}
                  height={170}
                  src={item.img}
                  alt={item.name}
                  className="w-34 h-34 rounded-full object-cover flex-shrink-0"
                />

                {/* Right Side - Content */}
                <div className="flex flex-col gap-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                  <div>
                    <p className="font-bold text-gray-700 text-base mb-1">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
