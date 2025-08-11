'use client';

import React from 'react';
import productsData from './products-data.json';
import { useCartStore } from '@/stores/useCartStore';

export default function Products() {
  const { addToCart, toggleDrawer } = useCartStore();

  return (
    <div>
      <section className="px-4 py-10 bg-gray-100">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {productsData.products.map((product, i) => (
            <div key={i} className="bg-white text-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-3"
              />
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-lg font-bold text-green-800 mb-2">
                TK {product.price.toFixed(2)}
              </p>
              <button
                type="button"
                onClick={() => {
                  addToCart(product);
                  toggleDrawer(true);
                }}
                className="bg-green-800 text-white px-4 py-1 rounded text-sm"
              >
                অর্ডার করুন
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
