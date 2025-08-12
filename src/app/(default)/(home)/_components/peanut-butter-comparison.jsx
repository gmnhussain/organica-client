import React from 'react';
import Image from 'next/image';

export default function PeanutButterCompare() {
  return (
    <section className="bg-[#D2D5C5] py-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1f3d1f] text-center mb-12">
          কেনো নিউডিউডটা পিনাট বাটার সবার সেরা?
        </h2>

        {/* Two column layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Divider line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#6A8042]"></div>

          {/* Left column */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/honey1.png"
              alt="নিউডিউডটা পিনাট বাটার"
              className="w-20 h-20 object-contain mb-2"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#1f3d1f] mb-6">
              নিউডিউডটা পিনাট বাটার
            </h3>
            <ul className="space-y-3 text-left">
              {[
                'প্রিমিয়াম থাই চিনা বাদাম',
                '১০০% খাঁটি লিচু ফুলের মধু',
                'এক্সট্রা ভার্জিন অলিভ অয়েল',
                '১০০% ফুডগ্রেড জার',
                'হিমালয়ান পিংক সল্ট',
                'ইমপোর্টেড হাই কোয়ালিটি ডার্ক চকোলেট',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 bg-green-700 rounded-full"></span>
                  <span className="text-[#1f3d1f]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/othaer1.png"
              alt="সাধারণ পিনাট বাটার"
              className="w-20 h-20 object-contain mb-2"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#1f3d1f] mb-6">
              সাধারণ পিনাট বাটার
            </h3>
            <ul className="space-y-3 text-left">
              {[
                'প্রিমিয়াম থাই চিনা বাদাম',
                '১০০% খাঁটি লিচু ফুলের মধু',
                'এক্সট্রা ভার্জিন অলিভ অয়েল',
                '১০০% ফুডগ্রেড জার',
                'হিমালয়ান পিংক সল্ট',
                'ইমপোর্টেড হাই কোয়ালিটি ডার্ক চকোলেট',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 bg-green-700 rounded-full"></span>
                  <span className="text-[#1f3d1f]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
