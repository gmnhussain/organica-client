import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <p className="text-center p-3 border-gray-200 border-b-1 font-medium text-sm text-gray-600">
          ৳১০০০ বা তার বেশি অর্ডারে ফ্রি শিপিং
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                SHOP
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                PRODUCTS
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                BLOGS
              </a>
            </nav>

            {/* Logo */}
            <div className="flex-1 flex justify-center md:justify-start md:flex-none">
              <h1 className="text-2xl font-bold text-green-600">Organica</h1>
            </div>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search"
                  className="pl-10 w-48"
                />
              </div>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
