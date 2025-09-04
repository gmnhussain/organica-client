'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';

const ingredients = [
  { img: '/peanutButter/1.jpg', label: 'খাই চিনা বাদাম' },
  { img: '/peanutButter/2.jpg', label: 'লিচু ফুলের মধু' },
  { img: '/peanutButter/3.jpg', label: 'ভার্জিন অলিভ অয়েল' },
  { img: '/peanutButter/4.jpg', label: 'ভার্জিন কোকোনাট অয়েল' },
  { img: '/peanutButter/5.jpg', label: 'নারিকেল' },
  { img: '/peanutButter/6.jpg', label: 'ডার্ক চকলেট' },
  { img: '/peanutButter/7.jpg', label: 'পিঙ্ক সল্ট' },
];

const benefits = [
  'লাইফ টাইম প্রোডাক্ট রিটার্ন গ্যারান্টি।',
  'অগ্রিম এক টাকা দেওয়া ছাড়াই অর্ডার করুন, পছন্দ হলে তখনই নিবেন।',
  'ডেলিভারিয়ান থাকা অবস্থায় প্রোডাক্ট দেখে পছন্দ না হলে রিটার্ন করে দিবেন।',
  'কোন প্রিজারভেটিভ ছাড়া সম্পূর্ণ প্রাকৃতিকভাবে প্রস্তুত।',
  'প্রতিটি ব্যাচে থাকে সর্বোচ্চ মানের নিশ্চয়তা।',
  'বাজারের যেকোনো পিনাট বাটারের চেয়ে, আমাদের পিনাট বাটার অনেক বেশি সুস্বাদু ও পুষ্টিকর!',
];

export default function PeanutButterBenefits() {
  return (
    <section className="py-20 container mx-auto">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-14">
        পিনাট বাটারের স্বাস্থ্য উপকারিতা
      </h2>

      {/* Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-5xl mx-auto">
        {ingredients.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3"
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-20 h-20 object-contain rounded-md shadow-sm"
            />
            <p className="text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-18 p-6 md:p-12">
        {/* Left side: Image with circular background */}
        <div className="relative w-64 h-64 md:w-96 md:h-96">
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
          <h2 className="text-2xl font-bold text-primary mb-6">
            কেনো নিউট্রিডিউটার পিনাট বাটার নিবেন?
          </h2>
          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <Image
                    src="/select.svg"
                    alt="icon"
                    width={30}
                    height={30}
                    className="w-3 h-3 object-contain"
                  />
                </div>
                <p className="text-md text-gray-800">{item}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors duration-300"
              href="/products"
            >
              অর্ডার করুন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
