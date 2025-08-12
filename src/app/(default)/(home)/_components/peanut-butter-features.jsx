'use client';
import React from 'react';
import Image from 'next/image';

const ingredients = [
  { img: '/peanutButter/1.jpg', label: 'খাই চিনা বাদাম' },
  { img: '/peanutButter/2.jpg', label: 'লিচু ফুলের মধু' },
  { img: '/peanutButter/3.jpg', label: 'ভার্জিন অলিভ অয়েল' },
  { img: '/peanutButter/4.jpg', label: 'ভার্জিন কোকোনাট অয়েল' },
  { img: '/peanutButter/5.jpg', label: 'নারিকেল' },
  { img: '/peanutButter/6.jpg', label: 'ডার্ক চকলেট' },
  { img: '/peanutButter/7.jpg', label: 'পিঙ্ক সল্ট' },
];

export default function PeanutButterBenefits() {
  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-8">
          পিনাট বাটারের স্বাস্থ্য উপকারিতা
        </h2>

        {/* Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {ingredients.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-20 h-20 object-contain"
              />
              <p className="text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-18 p-6 md:p-12">
        {/* Left side: Image with circular background */}
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* <div className="absolute inset-0 rounded-full bg-green-800"></div> */}
          <Image
            src="/penutButter.png"
            alt="Peanut Butter Products"
            width={384}
            height={384}
            className="relative object-contain w-full h-full p-4"
            style={{ zIndex: 10 }}
          />
        </div>

        {/* Right side: Text content */}
        <div className="max-w-lg text-gray-800">
          <h2 className="mb-6 font-bold text-lg md:text-xl">
            কেনো নিউডিউডাটর পিনাট বাটার নিবেন?
          </h2>

          <ul className="mb-6 space-y-3 list-disc list-inside marker:text-green-800">
            <li>লাইফ টাইম প্রোডাক্ট গ্যারান্টি।</li>
            <li>
              অগ্রিম এক টাকা দেওয়া ছাড়া অর্ডার করুন, পছন্দ হলে তবেই নিবেন।
            </li>
            <li>
              ডেলিভারিমান থাকা অবস্থায় প্রোডাক্ট দেখে পছন্দ না হলে রিটার্ন করে
              দিবেন
            </li>
            <li>কোন প্রিজারভেটিভ ছাড়া সম্পূর্ণ প্রাকৃতিকভাবে প্রস্তুত।</li>
            <li>প্রতিটি ব্যাচে থাকে সর্বোচ্চ মানের নিশ্চয়তা।</li>
            <li>
              বাজারের যেকোনো পিনাট বাটারের চেয়ে, আমাদের পিনাট বাটার অনেক বেশি
              সুস্বাদু ও পুষ্টিকর!
            </li>
          </ul>

          <button className="flex items-center gap-2 rounded bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800 transition">
            অর্ডার করুন
          </button>
        </div>
      </div>
    </section>
  );
}
