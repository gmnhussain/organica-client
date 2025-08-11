'use client';

import React, { useState, useEffect } from 'react';
import productsData from './products-data.json';

export default function Products() {
  const [cart, setCart] = useState<any[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
    setIsDrawerOpen(true); // Open drawer after adding
  };

  // Update quantity or remove
  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
      if (newCart.length === 0) {
        setIsDrawerOpen(false);
      }
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, qty } : item))
      );
    }
  };

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      {/* Products Section */}
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
                onClick={() => addToCart(product)}
                className="bg-green-800 text-white px-4 py-1 rounded text-sm"
              >
                অর্ডার করুন
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="absolute top-4 left-4 text-xl"
        >
          ✖
        </button>

        <div className="p-6 pt-16 overflow-y-auto h-full">
          <h3 className="text-2xl font-semibold mb-6">Shopping Cart</h3>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 mb-6 border-b pb-4 items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-base mb-1 leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm font-normal mb-2">
                  TK {item.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="px-3 py-1 border rounded text-lg font-bold"
                  >
                    -
                  </button>
                  <span className="w-6 text-center">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-3 py-1 border rounded text-lg font-bold"
                  >
                    +
                  </button>
                  <button
                    onClick={() => updateQty(item.id, 0)}
                    className="text-sm text-red-600 underline ml-6"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {cart.length > 0 && (
            <>
              <div className="font-bold text-lg mt-6 border-t pt-4">
                Subtotal: TK {subtotal.toFixed(2)}
              </div>
              <button className="mt-6 w-full bg-green-800 text-white py-3 rounded text-lg">
                View Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
