"use client";

import Layout from "@/components/Layout";
import { useCart } from "@/hooks/useCart";
import { books } from "@/data/books";
import type { CartItem } from "@/store/cart";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();
  const cartBooks = items.map((item: CartItem) => ({
    item,
    book: books.find((book) => book.id === item.bookId),
  }));

  const total = cartBooks.reduce(
    (sum, entry) => sum + (entry.book?.price ?? 0) * entry.item.quantity,
    0,
  );

  return (
    <Layout>
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Shopping Cart</h1>
        {cartBooks.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-600">
            Your cart is empty. Browse books and add a few to start shopping.
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {cartBooks.map(({ item, book }) => (
              <div key={item.bookId} className="flex flex-col gap-4 rounded-3xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{book?.title ?? "Unknown book"}</p>
                  <p className="text-sm text-slate-500">Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-slate-900">${((book?.price ?? 0) * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeItem(item.bookId)} className="rounded-full bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xl font-semibold text-slate-900">Total: ${total.toFixed(2)}</p>
              <button onClick={() => clearCart()} className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                Clear cart
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
