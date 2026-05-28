import type { Book } from "@/data/books";
import BookCard from "@/components/BookCard";

export default function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
