import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MessageCircle,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react';
import ChatWeget from './ChatWidget/index';

export const Footer = () => {
  return (
    <footer className="bg-[#1E3006] text-white relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Left Section - Organica Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Organica Logo"
                width={100}
                height={100}
                className="w-32 h-auto object-contain invert brightness-0 mb-4 inline-block"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              আপনার স্বাস্থ্যের জীবনযাত্রার সঠিক আয়ুর্বেদিক রোগের পুষ্টিকর
              খাদ্য বর্ণ সরবরাহ করে থাকি, যা আপনাকে সুস্থ ও শক্তিশালী রাখতে
              সহায়তা।
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8 mb-6">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Middle Section - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">যোগাযোগ</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">ধানমন্ডি ৩২ ঢাকা বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <Link
                  href="mailto:organica@gmail.com"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  organica@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <Link
                  href="tel:+8801600000000003"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  ০১৬০০০০০০০০০০৩
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Emergency Contact & Download */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">জরুরী প্রয়োজনে</h3>
            <ul>
              <li>
                <Link
                  href="/return-refund-faqs#1"
                  className="text-sm mt-2 inline-block hover:text-gray-300 transition-colors"
                >
                  রিটার্ন পলিসি
                </Link>
              </li>
              <li>
                <Link
                  href="/return-refund-faqs#2"
                  className="text-sm mt-2 inline-block hover:text-gray-300 transition-colors"
                >
                  রিফান্ড পলিসি
                </Link>
              </li>
              <li>
                <Link
                  href="/return-refund-faqs#3"
                  className="text-sm mt-2 inline-block hover:text-gray-300 transition-colors"
                >
                  জিজ্ঞাসা
                </Link>
              </li>
            </ul>

            {/* <div>
              <h4 className="text-base font-semibold mb-3">ডাউনলোড</h4>
              <div className="inline-block bg-black rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full fill-white"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-center gap-2 pb-2 border-t border-white/15 pt-2">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} A Product Of API Solutions Ltd.
        </p>
        <Link
          href="https://apisolutionsltd.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/API-logo.png"
            alt="API Company Logo"
            width={48}
            height={48}
            className="w-10 h-10 object-contain brightness-0 invert mb-2"
            aria-label="API Company Logo"
          />
        </Link>
      </div>

      {/* Chat Icon */}
      {/* <div className="absolute bottom-30 right-10">
        <div className="bg-yellow-400 rounded-full p-3 cursor-pointer hover:bg-yellow-300 transition-colors">
          <MessageCircle className="w-6 h-6 text-green-900" />
        </div>
      </div> */}
      {/* chat weget  */}
      <ChatWeget />
    </footer>
  );
};
