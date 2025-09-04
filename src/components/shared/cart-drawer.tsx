'use client';

import Link from 'next/link';
import { useCartStore, useCartSubtotal } from '@/stores/useCartStore';
import { useBodyOverflow } from '@/hooks/useBodyOverflow';
import { cn } from '@/lib/utils';
import SafeImage from './image';
import { getStoragePath } from '@/lib/helpers';

const CartDrawer = () => {
  const { cart, updateQty, isDrawerOpen, toggleDrawer } = useCartStore();
  const subtotal = useCartSubtotal();

  useBodyOverflow(isDrawerOpen);

  // if (!isDrawerOpen) return null;

  return (
    <>
      {/* backdrop */}
      <div
        onClick={() => toggleDrawer(false)}
        className={cn(
          'fixed w-full h-full top-0 left-0 inset-0 bg-black duration-300',
          isDrawerOpen ? 'opacity-66 z-40' : 'opacity-0 z-[-1]'
        )}
      ></div>

      {/* cart */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 absolute top-0 right-[20px] left-0 z-60 bg-white">
          <h3 className="text-2xl font-semibold pr-10">Shopping Cart</h3>
          {/* Close Button */}
          <button
            onClick={() => toggleDrawer(false)}
            className="absolute top-6 right-2 text-xl cursor-pointer"
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

        <div className="p-6 overflow-y-auto pt-24 h-full">
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 mb-4 border-b pb-3">
                <SafeImage
                  src={getStoragePath(item?.photo)}
                  alt={item?.name || ''}
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] object-cover rounded"
                />

                <div className="text-left">
                  <h4 className="font-medium text-sm mb-1 leading-tight">
                    {item?.name || ''}
                  </h4>
                  <p className="text-xs font-normal mb-2">
                    TK {item?.mrpprice ? item?.mrpprice.toFixed(2) : '0.00'}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="px-2 py-0.5 border rounded text-base font-bold"
                    >
                      -
                    </button>
                    <span className="w-5 text-center text-sm">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="px-2 py-0.5 border rounded text-base font-bold"
                    >
                      +
                    </button>
                    <button
                      onClick={() => updateQty(item.id, 0)}
                      className="text-xs text-red-600 underline ml-3 hover:cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <>
              <div className="font-bold text-lg mt-4 pb-2">
                Subtotal: TK {subtotal.toFixed(2)}
              </div>

              <Link
                href="/cart"
                className="mt-4 block w-full bg-gray-200 text-gray-900 py-2 rounded text-lg text-center hover:opacity-80"
                onClick={() => toggleDrawer(false)}
              >
                View Cart
              </Link>
              <Link
                href="/cart"
                className="mt-4 block w-full bg-primary text-white py-2 rounded text-lg text-center hover:opacity-90"
                onClick={() => toggleDrawer(false)}
              >
                Checkout
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
