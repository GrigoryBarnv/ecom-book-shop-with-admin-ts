import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";

export default function BookCard({ book }: { book: Book }) {
  const imageUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link href={`/books/${book.id}`} className="block">
        <div className="relative h-[320px] overflow-hidden bg-slate-100">
          <Image
            src={imageUrl}
            alt={`Cover of ${book.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-contain p-4"
          />
        </div>
      </Link>
      <div className="space-y-2 p-5">
        <Link href={`/books/${book.id}`} className="block">
          <h3 className="text-lg font-semibold text-slate-900">{book.title}</h3>
        </Link>
        <p className="text-sm text-slate-500">{book.author}</p>
        <p className="text-sm text-slate-500">{book.category}</p>
        <div className="flex items-center justify-between pt-4">
          <span className="text-base font-semibold text-slate-900">${book.price.toFixed(2)}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-700">
            Book
          </span>
        </div>
      </div>
    </article>
  );
}
