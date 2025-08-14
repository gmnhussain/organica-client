'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

const testimonials = [
  {
    img: '/jiaur.jpg',
    text: 'আপনাদের থেকে আমি কফেকাবার টি নিয়েছি। আপনাদের টি টা খুব ভালো লেগেছে। দাম আর টেস্ট সব ঠিক আছে কিন্তু প্রাইস টা একটু বেশি।',
    name: 'জিয়াউর রহমান',
    role: 'ইঞ্জিনিয়ার',
  },
  {
    img: '/nazmul.jpg',
    text: 'আপনাদের থেকে আমি কফেকাবার টি নিয়েছি। আপনাদের টি টা খুব ভালো লেগেছে। দাম আর টেস্ট সব ঠিক আছে কিন্তু প্রাইস টা একটু বেশি।',
    name: 'নাজমুল হোসাইন',
    role: 'ঢাকা',
  },
  {
    img: '/jiaur.jpg',
    text: 'আপনাদের থেকে আমি কফেকাবার টি নিয়েছি। আপনাদের টি টা খুব ভালো লেগেছে। দাম আর টেস্ট সব ঠিক আছে কিন্তু প্রাইস টা একটু বেশি।',
    name: 'জিয়াউর রহমান',
    role: 'ইঞ্জিনিয়ার',
  },
  {
    img: '/nazmul.jpg',
    text: 'আপনাদের থেকে আমি কফেকাবার টি নিয়েছি। আপনাদের টি টা খুব ভালো লেগেছে। দাম আর টেস্ট সব ঠিক আছে কিন্তু প্রাইস টা একটু বেশি।',
    name: 'নাজমুল হোসাইন',
    role: 'ঢাকা',
  },
];

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="bg-[#F8F7F5] py-12">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-center text-xl md:text-2xl font-bold text-[#3F4920] mb-10">
          সম্মানিত কাস্টমার রিভিউ
        </h2>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
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
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
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
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="pb-8"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="text-[#555] text-sm leading-relaxed">
                  {item.text}
                </p>
                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
