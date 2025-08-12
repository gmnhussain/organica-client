import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types/product';

interface CartItem extends Product {
  qty: number;
  // price: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQty: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  isDrawerOpen: boolean;
  toggleDrawer: (open?: boolean) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      isDrawerOpen: false,
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            const updatedCart = state.cart.map((item) =>
              item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            );
            return { cart: updatedCart };
          }

          return {
            cart: [...state.cart, { ...product, qty: 1 }],
            isDrawerOpen: true,
          };
        });
      },

      updateQty: (id, qty) => {
        if (qty <= 0) {
          get().removeFromCart(id);
          return;
        }

        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, qty } : item
          ),
        }));
      },

      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
          isDrawerOpen: state.cart.length > 1 ? state.isDrawerOpen : false,
        }));
      },

      clearCart: () => {
        set({ cart: [], isDrawerOpen: false });
      },

      toggleDrawer: (open) => {
        set((state) => ({
          isDrawerOpen: open !== undefined ? open : !state.isDrawerOpen,
        }));
      },
    }),
    {
      name: 'cart-storage', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }), // only persist cart
    }
  )
);

// Optional: Selector hooks for optimized re-renders
export const useCartCount = () =>
  useCartStore((state) => state.cart.reduce((sum, item) => sum + item.qty, 0));

export const useCartItems = () => useCartStore((state) => state.cart);

export const useCartSubtotal = () =>
  useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.mrpprice * item.qty, 0)
  );
