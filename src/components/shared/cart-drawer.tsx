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
          isDrawerOpen ? 'opacity-75 z-40' : 'opacity-0 z-[-1]'
        )}
      ></div>

      {/* cart */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
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
            ✖
          </button>
        </div>

        <div className="p-6 overflow-y-auto pt-24 h-full">
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 mb-6 border-b pb-4 items-center"
              >
                {/* <img
                src={item.photo}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              /> */}

                <SafeImage
                  src={getStoragePath(item?.photo)}
                  alt={item?.name || ''}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-cover rounded"
                  // placeholder={'/placeholder.png'}
                />

                <div className="flex-1">
                  <h4 className="font-semibold text-base mb-1 leading-tight">
                    {item?.name || ''}
                  </h4>
                  <p className="text-sm font-normal mb-2">
                    TK {item?.mrpprice ? item?.mrpprice.toFixed(2) : '0.00'}
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
          </div>

          {cart.length > 0 && (
            <>
              <div className="font-bold text-lg mt-4 pt-4 pb-2">
                Subtotal: TK {subtotal.toFixed(2)}
              </div>

              <Link
                href="/cart"
                className="mt-6 block w-full bg-green-800 text-white py-3 rounded text-lg text-center"
                onClick={() => toggleDrawer(false)}
              >
                View Cart
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
