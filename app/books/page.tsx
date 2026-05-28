"use client";

import { useMemo, useState } from "react";
import BookGrid from "@/components/BookGrid";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import { books } from "@/data/books";

export default function BooksPage() {
  const [query, setQuery] = useState("");
  const filteredBooks = useMemo(
    () =>
      books.filter((book) =>
        [book.title, book.author, book.category].some((value) =>
          value.toLowerCase().includes(query.toLowerCase()),
        ),
      ),
    [query],
  );

  return (
    <Layout>
      <section className="space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-slate-900">All Books</h1>
            <p className="text-slate-500">Search titles, browse by author, and preview cover images from Open Library.</p>
          </div>
          <SearchBar value={query} onChange={setQuery} />
          <div className="mt-6">
            <BookGrid books={filteredBooks} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
