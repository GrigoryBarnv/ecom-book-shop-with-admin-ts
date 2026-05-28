"use client";

import { useCartStore } from "@/store/cart";
import type { CartStore } from "@/store/cart";

export function useCart() {
  const items = useCartStore((state: CartStore) => state.items);
  const addItem = useCartStore((state: CartStore) => state.addItem);
  const removeItem = useCartStore((state: CartStore) => state.removeItem);
  const clearCart = useCartStore((state: CartStore) => state.clearCart);

  return { items, addItem, removeItem, clearCart };
}
