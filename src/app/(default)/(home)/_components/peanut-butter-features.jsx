'use client';
import React from 'react';

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
    </section>
  );
}
