import { create } from "zustand";

export interface CartItem {
  bookId: string;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (bookId: string, quantity: number) => void;
  removeItem: (bookId: string) => void;
  clearCart: () => void;
}

type SetCartStore = (partial: Partial<CartStore> | ((state: CartStore) => Partial<CartStore>)) => void;

export const useCartStore = create<CartStore>((set: SetCartStore) => ({
  items: [],
  addItem: (bookId: string, quantity: number) =>
    set((state: CartStore) => ({
      items: [...state.items, { bookId, quantity }],
    })),
  removeItem: (bookId: string) =>
    set((state: CartStore) => ({
      items: state.items.filter((item) => item.bookId !== bookId),
    })),
  clearCart: () => set({ items: [] }),
}));
