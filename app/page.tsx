import BookGrid from "@/components/BookGrid";
import Layout from "@/components/Layout";
import { books } from "@/data/books";

export default function Home() {
  return (
    <Layout>
      <section className="space-y-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 p-10 text-white shadow-xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-100">Welcome to WebBook</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">Discover real books with covers from Open Library.</h1>
            <p className="max-w-2xl text-lg text-slate-100">
              Build your own bookstore experience with book images, names, and details pulled from Open Library. Browse classic titles, popular authors, and curated sampling.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Featured titles</h2>
              <p className="text-sm text-slate-500">Explore a few hand-selected books to get started.</p>
            </div>
          </div>
          <BookGrid books={books.slice(0, 4)} />
        </div>
      </section>
    </Layout>
  );
}
