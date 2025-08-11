'use client';

import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore, useCartCount } from '@/stores/useCartStore';

export function Header() {
  const cartCount = useCartCount();
  const { toggleDrawer } = useCartStore();

  return (
    <header className="bg-white shadow-sm">
      <p className="text-center p-1 font-medium text-sm text-white bg-[#191d22]">
        ৳১০০০ বা তার বেশি অর্ডারে ফ্রি শিপিং
      </p>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              HOME
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              SHOP
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              PRODUCTS
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              BLOGS
            </Link>
          </nav>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start md:flex-none">
            <h1 className="text-2xl font-bold text-green-600">Organica</h1>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="text" placeholder="Search" className="pl-10 w-48" />
            </div>

            {/* Cart Icon with Badge */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                toggleDrawer(true);
              }}
              className="relative"
            >
              <ShoppingCart className="w-8 h-8 text-orange-500" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
