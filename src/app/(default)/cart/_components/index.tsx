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
      <div className="min-h-screen bg-gray-50 flex justify-center">
        <div className="text-center p-8 bg-white rounded-md border max-w-md h-80 mt-20">
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
        <div className="mb-6 rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">Your Cart</h1>
            <Button
              variant="ghost"
              className="text-gray-600 hover:bg-transparent text-md hover:text-gray-900 !pr-0"
              asChild
            >
              <Link href="/products">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-10 gap-8 items-start">
          {/* Cart Items */}
          <div className="lg:col-span-7 bg-white rounded-md border overflow-hidden">
            <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-white border-b-3 font-medium text-gray-700 text-sm uppercase tracking-wide">
              <div className="col-span-6 font-bold">Product</div>
              <div className="col-span-2 text-center font-bold">Price</div>
              <div className="col-span-2 text-center font-bold">Quantity</div>
              <div className="col-span-2 text-center font-bold">Subtotal</div>
            </div>

            {/* Products List */}
            <div className="divide-y">
              {cart.map((item) => (
                <div key={item.id} className="px-6 py-3 h-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center h-auto">
                    {/* Product Column */}
                    <div className="col-span-1 sm:col-span-6 flex items-center gap-4 h-auto">
                      <div className="w-16 h-16 border rounded-sm p-1 bg-white flex-shrink-0">
                        <SafeImage
                          src={getStoragePath(item?.photo)}
                          alt={item?.name || ''}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base text-gray-900 truncate">
                          {item?.name || ''}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleUpdateQty(item.id, 0)}
                          className="text-red-500 hover:text-red-700 shadow-none p-0 h-auto mt-1 sm:hidden"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>

                    {/* Price Column */}
                    <div className="col-span-1 sm:col-span-2 text-left sm:text-center h-auto">
                      <span className="text-sm text-gray-500 sm:hidden">
                        Price:{' '}
                      </span>
                      <span className="font-medium text-gray-900">
                        {item.mrpprice ? item.mrpprice.toFixed(0) : '0'} ৳
                      </span>
                    </div>

                    {/* Quantity Column */}
                    <div className="col-span-1 sm:col-span-2 flex items-center justify-start sm:justify-center gap-2 h-auto">
                      <span className="text-sm text-gray-500 sm:hidden">
                        Qty:{' '}
                      </span>
                      <div className="flex items-center border rounded-sm">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleUpdateQty(item.id, item.qty - 1)}
                          className="h-8 w-8 p-0 hover:bg-gray-100 rounded-none border-r"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-12 text-center text-sm font-medium py-1">
                          {item.qty}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleUpdateQty(item.id, item.qty + 1)}
                          className="h-8 w-8 p-0 hover:bg-gray-100 rounded-none border-l"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleUpdateQty(item.id, 0)}
                        className="text-red-500 hover:text-red-600 shadow-none p-1 hidden sm:block"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Subtotal Column */}
                    <div className="col-span-1 sm:col-span-2 text-left sm:text-center h-auto">
                      <span className="text-sm text-gray-500 sm:hidden">
                        Subtotal:{' '}
                      </span>
                      <span className="font-medium text-gray-900">
                        {item.mrpprice
                          ? (item.mrpprice * item.qty).toFixed(0)
                          : '0'}{' '}
                        ৳
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-3">
            <div className="bg-white border p-8 rounded-md sticky top-4 h-auto">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    {subtotal ? subtotal.toFixed(0) : '0'} ৳
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">0 ৳</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">0 ৳</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{subtotal ? subtotal.toFixed(0) : '0'} ৳</span>
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
