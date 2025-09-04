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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {/* Left Section - Organica Brand */}
          <div className="space-y-4 text-center md:text-left">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Organica Logo"
                width={100}
                height={100}
                className="w-28 md:w-32 h-auto object-contain invert brightness-0 mb-4 inline-block"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              আপনার স্বাস্থ্যের জীবনযাত্রার সঠিক আয়ুর্বেদিক রোগের পুষ্টিকর
              খাদ্য বর্ণ সরবরাহ করে থাকি, যা আপনাকে সুস্থ ও শক্তিশালী রাখতে
              সহায়তা।
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6 md:mt-8 mb-6">
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
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">যোগাযোগ</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 sm:gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">ধানমন্ডি ৩২ ঢাকা বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <Link
                  href="mailto:organica@gmail.com"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  organica@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <Link
                  href="tel:+8801600000000003"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  ০১৬০০০০০০০০০৩
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Emergency Contact & Download */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-semibold">জরুরী প্রয়োজনে</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/return-refund-faqs#1"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  রিটার্ন পলিসি
                </Link>
              </li>
              <li>
                <Link
                  href="/return-refund-faqs#2"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  রিফান্ড পলিসি
                </Link>
              </li>
              <li>
                <Link
                  href="/return-refund-faqs#3"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  জিজ্ঞাসা
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 border-t border-white/15 pt-4 pb-2">
        <p className="text-sm text-white/70 text-center sm:text-left">
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
            className="w-10 h-10 object-contain brightness-0 invert"
            aria-label="API Company Logo"
          />
        </Link>
      </div>

      {/* Chat Widget */}
      <ChatWeget />
    </footer>
  );
};
