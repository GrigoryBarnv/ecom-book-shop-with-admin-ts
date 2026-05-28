import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { books } from "@/data/books";

export function generateStaticParams() {
  return books.map((book) => ({ id: book.id }));
}

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find((item) => item.id === params.id);

  if (!book) {
    notFound();
  }

  const imageUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;

  return (
    <Layout>
      <div className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="relative h-[420px] w-full max-w-sm overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
            <Image src={imageUrl} alt={book.title} fill className="object-contain p-6" />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold text-slate-900">{book.title}</h1>
              <p className="text-lg text-slate-600">by {book.author}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{book.category}</p>
            </div>
            <p className="max-w-2xl text-slate-600">{book.description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-900">ISBN: {book.isbn}</span>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-emerald-700">${book.price.toFixed(2)}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/cart" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Add to cart
              </Link>
              <Link href="/books" className="text-sm font-medium text-slate-700 underline underline-offset-4">
                Back to books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
