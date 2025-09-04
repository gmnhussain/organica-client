import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function PeanutButterCompare() {
  return (
    <section className="bg-[#edefe8] py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-14">
          কেনো নিউ পিনাট বাটার সবার সেরা?
        </h2>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="flex flex-col items-center text-left relative after:content-[''] after:absolute after:top-0 after:right-0 after:w-px after:h-[350px] after:bg-gradient-to-b after:from-transparent after:via-gray-400 after:to-transparent">
            <img
              src="/honey1.png"
              alt="নিউ পিনাট বাটার"
              className="w-20 h-20 object-contain mb-2"
            />
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-6">
              নিউ পিনাট বাটার
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
                <li key={i} className="flex items-start gap-4">
                  <div className="shrink-0">
                    <CheckCircle2 size={18} className="text-primary" />
                  </div>
                  <p className="text-md text-gray-800">{item}</p>
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
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-6">
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
                <li key={i} className="flex items-start gap-4">
                  <div className="shrink-0">
                    <CheckCircle2 size={18} className="text-primary" />
                  </div>
                  <p className="text-md text-gray-800">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
