'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  ShoppingCart,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  CircleUserRound,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  useCartStore,
  useCartCount,
  useCartSubtotal,
} from '@/stores/useCartStore';
import SearchComponent from './search';

export function Header() {
  const cartCount = useCartCount();
  const { toggleDrawer } = useCartStore();
  const subtotal = useCartSubtotal();

  return (
    <header className="bg-white border-b relative">
      <div className="bg-primary py-2">
        <div className="flex items-center justify-between text-sm font-medium text-white container mx-auto">
          {/* Left side - Phone number */}
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a
              href="tel:+8801234567890"
              className="hover:underline transition-all duration-200"
            >
              +880 123 456 7890
            </a>
          </div>

          {/* Center - Free shipping message */}
          <div className="flex-1 text-center px-4">
            ৳১০০০ বা তার বেশি অর্ডারে ফ্রি শিপিং
          </div>

          {/* Right side - Social media links */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 items-center py-4 gap-1">
          {/* Navigation */}
          <nav className="hidden md:flex space-x-7">
            <Link
              href="/"
              className="text-gray-800 text-[15px] hover:text-primary font-bold uppercase"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-800 text-[15px] hover:text-primary font-bold uppercase"
            >
              Products
            </Link>
            <Link
              href="/about-us"
              className="text-gray-800 text-[15px] hover:text-primary font-bold uppercase"
            >
              About
            </Link>
            {/* <Link
              href="#"
              className="text-gray-800 text-[15px] hover:text-primary font-bold uppercase"
            >
              Blog
            </Link> */}
            <Link
              href="/contact"
              className="text-gray-800 text-[15px] hover:text-primary font-bold uppercase"
            >
              Contact
            </Link>
          </nav>

          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <Image
                width={200}
                height={200}
                src="/logo.png"
                alt="Logo"
                className="h-11 w-auto"
              />
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center justify-end space-x-5">
            <SearchComponent />
            <Link href="#">
              <CircleUserRound className="w-4.5 h-4.5 text-gray-600 shrink-0" />
            </Link>
            {/* Cart Icon with Badge */}
            <div className="flex items-center gap-0">
              <b className="text-gray-700">
                <span>৳</span> {subtotal.toFixed(2)}
              </b>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  toggleDrawer(true);
                }}
                className="relative hover:bg-transparent"
              >
                <ShoppingCart className="!w-5 !h-5 text-orange-500" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
