'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCartStore, useCartSubtotal } from '@/stores/useCartStore';
import SafeImage from '@/components/shared/image';
import { getStoragePath } from '@/lib/helpers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function CartPage() {
  const router = useRouter();
  const { cart, updateQty } = useCartStore();
  const subtotal = useCartSubtotal();
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle quantity update
  const handleUpdateQty = (id: number, newQty: number) => {
    if (newQty < 1) {
      if (confirm('Remove this item from your cart?')) {
        updateQty(id, 0);
        toast.success('Item removed from cart');
      }
      return;
    }
    updateQty(id, newQty);
  };

  // Handle proceed to checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    router.push('/checkout');
  };

  if (!isMounted) {
    return null;
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-sm max-w-md">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <ShoppingCart className="h-8 w-8 text-gray-400" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="bg-white px-6 py-4 mb-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
              asChild
            >
              <Link href="/products">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm">
            <div className="divide-y">
              {cart.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 border rounded-sm p-1 bg-white flex-shrink-0">
                      <SafeImage
                        src={getStoragePath(item?.photo)}
                        alt={item?.name || ''}
                        width={150}
                        height={150}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {item?.name || ''}
                          </h3>
                          {/* <p className="text-gray-600 text-sm mt-1">
                            {item?.description || ''}
                          </p> */}
                        </div>
                        <p className="text-lg font-medium text-gray-900">
                          TK {item.mrpprice ? item.mrpprice.toFixed(2) : '0.00'}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleUpdateQty(item.id, item.qty - 1)
                            }
                            className="h-8 w-8 p-0 bg-white shadow-none"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.qty}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleUpdateQty(item.id, item.qty + 1)
                            }
                            className="h-8 w-8 p-0 bg-white shadow-none"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleUpdateQty(item.id, 0)}
                          className="text-red-500 hover:text-red-700 shadow-none"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-6 rounded-lg sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    TK {subtotal ? subtotal.toFixed(2) : '0.00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">TK 0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">TK 0.00</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>TK {subtotal ? subtotal.toFixed(2) : '0.00'}</span>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <label
                  htmlFor="coupon"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Coupon Code
                </label>
                <div className="flex gap-2">
                  <Input
                    id="coupon"
                    placeholder="Enter coupon code"
                    className="flex-1 shadow-none bg-white"
                  />
                  <Button variant="outline" className="bg-white">
                    Apply
                  </Button>
                </div>
              </div>

              <Button
                className="w-full bg-[#6a8042] hover:bg-[#6a8042]/90 text-white py-3"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
