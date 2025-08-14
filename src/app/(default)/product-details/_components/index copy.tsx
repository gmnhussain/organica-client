'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'swiper/css';
import 'swiper/css/navigation';
import 'photoswipe/dist/photoswipe.css';

const ProductView = () => {
  const productImages = [
    '/products/img01.jpg',
    '/products/img02.jpg',
    '/products/img03.jpg',
    '/products/img02.jpg',
    '/products/img01.jpg',
  ];

  const [mainImage, setMainImage] = useState(productImages[0]);

  return (
    <Gallery>
      <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-[142px_1fr_1fr] gap-6">
        {/* Left Thumbnail Images */}
        <div className="flex flex-col items-center gap-3">
          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={10}
            navigation={{
              prevEl: '.swiper-thumb-prev',
              nextEl: '.swiper-thumb-next',
            }}
            modules={[Navigation]}
            className="h-[455px]"
          >
            {productImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`thumb-${index}`}
                  className={`w-full h-[142px] object-cover rounded border cursor-pointer hover:opacity-50 ${
                    mainImage === img
                      ? 'opacity-50 border-green-500'
                      : 'border-gray-300'
                  }`}
                  onClick={() => setMainImage(img)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-4 mt-2">
            <button className="swiper-thumb-prev px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
              ↑
            </button>
            <button className="swiper-thumb-next px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
              ↓
            </button>
          </div>
        </div>

        {/* Main Product Image (click opens full gallery) */}
        <div className="flex items-center justify-center">
          {/* Map all images for gallery, but only render one visible img */}
          {productImages.map((img, index) => (
            <Item
              key={index}
              original={img}
              thumbnail={img}
              width="1200"
              height="900"
            >
              {({ ref, open }) =>
                index === 0 ? ( // show only the first one (main image)
                  <img
                    ref={ref}
                    onClick={open}
                    src={mainImage}
                    alt="product"
                    className="w-full max-h-[455px] object-contain rounded cursor-pointer"
                  />
                ) : null
              }
            </Item>
          ))}
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            প্রাকৃতিক চাকের মধু – 1KG
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-lg text-gray-500 line-through">1,500 ৳</span>
            <span className="text-2xl font-bold text-green-600">1,200 ৳</span>
            <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded">
              -20%
            </span>
            <span className="bg-red-100 text-red-700 text-sm font-semibold px-2 py-1 rounded">
              HOT
            </span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            আপনি যদি গতি প্রাকৃতিক মধু সংগ্রহ করেন, তাহলে প্রাকৃতিক চাকের মধু
            একটি ভালো পছন্দ হতে পারে। আমাদের প্রাকৃতিক চাকের মধুতে কোনো
            রাসায়নিক বা প্রসেসিং করা হয় না, যা এটিকে 100% প্রাকৃতিক এবং
            বিশুদ্ধ করে তোলে।
          </p>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border rounded">-</button>
            <span>1</span>
            <button className="px-3 py-1 border rounded">+</button>
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              ADD TO CART
            </button>
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
              BUY NOW
            </button>
          </div>

          <div className="flex gap-3 items-center">
            <a
              href="tel:+8809613821489"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              কল করুন: +8809613821489
            </a>
            <a
              href="https://wa.me/8809613821489"
              className="px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2 hover:bg-green-600"
            >
              Whatsapp Us
            </a>
          </div>

          <div className="text-sm text-gray-600">
            <p>
              <strong>Category:</strong> Honey
            </p>
            <p>
              <strong>Tags:</strong> natural bee honey, natural honey
            </p>
          </div>
        </div>
      </div>
    </Gallery>
  );
};

export default ProductView;
