'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // alert(`Searching for: ${searchQuery}`);
      // Add your search logic here
    }
  };

  const handlePopularSearchClick = (searchTerm: string) => {
    setSearchQuery(searchTerm);
    console.log('Popular search clicked:', searchTerm);
    // alert(`Selected popular search: ${searchTerm}`);
    // You can add navigation or search logic here
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const popularSearches = [
    { label: 'Organic Oil', href: '#' },
    { label: 'Honey', href: '#' },
    { label: 'Nuts & Seeds', href: '#' },
    { label: 'Desi Ghee', href: '#' },
  ];

  return (
    <div ref={searchRef} className="flex items-center">
      <button
        onClick={toggleSearch}
        aria-label={isOpen ? 'Close search' : 'Open search'}
      >
        {isOpen ? (
          <X className="h-5 w-5 text-gray-700 hover:cursor-pointer" />
        ) : (
          <Search className="h-5 w-5 text-gray-700 hover:cursor-pointer" />
        )}
      </button>

      <div
        className={`absolute left-0 right-0 top-[calc(100%+1px)] z-10 !w-full bg-white px-14 py-10 shadow-lg transition-all duration-300 ease-out transform ${
          isOpen
            ? 'w-full opacity-100 translate-y-0 visible'
            : 'w-full opacity-0 -translate-y-4 invisible'
        } overflow-hidden`}
      >
        <form
          onSubmit={handleSubmit}
          className="relative mb-4 max-w-3xl mx-auto"
        >
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            autoFocus={isOpen}
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors hover:cursor-pointer"
            aria-label="Search"
          >
            <Search className="h-5 w-5 shrink-0" />
          </button>
        </form>

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-gray-600 text-sm mr-3">Popular Searches:</span>
          {popularSearches.map((item, index) => (
            <span key={item.label}>
              <button
                onClick={() => handlePopularSearchClick(item.label)}
                className="text-sm text-primary opacity-70 hover:opacity-100 underline px-1 py-0.5 rounded transition-colors cursor-pointer"
              >
                {item.label}
              </button>
              {index < popularSearches.length - 1 && (
                <span className="text-gray-400 mx-3">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
