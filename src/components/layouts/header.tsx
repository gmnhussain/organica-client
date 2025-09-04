'use client';

import React, { useState } from 'react';
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b relative">
      <div className="bg-primary py-2">
        <div className="container mx-auto px-4 flex items-center justify-center sm:justify-between text-sm font-medium text-white">
          {/* Left side - Phone number (hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a
              href="tel:+8801234567890"
              className="hover:underline transition-all duration-200"
            >
              +880 123 456 7890
            </a>
          </div>

          {/* Center - Free shipping message (always visible) */}
          <div className="text-center px-4 flex-1">
            ৳১০০০ বা তার বেশি অর্ডারে ফ্রি শিপিং
          </div>

          {/* Right side - Social media links (hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-3">
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

      <div className="relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-800 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
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
              <Link
                href="/contact"
                className="text-gray-800 text-[15px] hover:text-primary font-bold uppercase"
              >
                Contact
              </Link>
            </nav>

            {/* Logo */}
            <div className="flex justify-center flex-1">
              <Link href="/">
                <Image
                  width={300}
                  height={300}
                  src="/logo.png"
                  alt="Logo"
                  className="w-34 h-10 object-contain"
                />
              </Link>
            </div>

            {/* Right - Search & Cart */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <SearchComponent />
              <Link href="#">
                <CircleUserRound className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-gray-600 shrink-0" />
              </Link>
              <div className="flex items-center gap-1">
                <b className="text-gray-700 text-xs sm:text-sm">
                  <span>৳</span> {subtotal.toFixed(2)}
                </b>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleDrawer(true)}
                  className="relative hover:bg-transparent"
                >
                  <ShoppingCart className="!w-4 !h-4 sm:!w-5 sm:!h-5 text-orange-500" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] sm:text-xs font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide-in Mobile Menu */}
        <div
          className={`
          fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col space-y-4 px-6">
            <Link
              href="/"
              className="text-gray-800 hover:text-primary font-bold uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-800 hover:text-primary font-bold uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about-us"
              className="text-gray-800 hover:text-primary font-bold uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-primary font-bold uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
}
