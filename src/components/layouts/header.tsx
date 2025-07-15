import React from 'react';
import { Phone, Leaf } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-green-800">অরগানিক</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              হোম
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              পণ্য
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              আমাদের সম্পর্কে
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              যোগাযোগ
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">০১৭১২৩৪৫৬৭৮</span>
          </div>
        </div>
      </div>
    </header>
  );
}
