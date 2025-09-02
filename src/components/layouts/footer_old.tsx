import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Leaf,
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-xl font-bold">অরগানিক</span>
            </div>
            <p className="text-green-200 mb-4">
              প্রাকৃতিক ও বিশুদ্ধ মধুর বিশ্বস্ত উৎস
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-green-200 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-green-200 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-green-200 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">পণ্য</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  খেজুর গুড়
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  মধু
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  সরিষা মধু
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  কালোজিরা মধু
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">গুরুত্বপূর্ণ লিংক</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  নীতিমালা
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  ডেলিভারি
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white">
                  রিটার্ন পলিসি
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-200" />
                <span className="text-green-200">০১৭১২৩৪৫৬৭৮</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-200" />
                <span className="text-green-200">info@organic.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-200" />
                <span className="text-green-200">ঢাকা, বাংলাদেশ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © ২০২৫ অরগানিক। সকল অধিকার সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};
