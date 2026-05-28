export type Book = {
  id: string;
  title: string;
  author: string;
  isbn: string;
  price: number;
  description: string;
  category: string;
};

export const books: Book[] = [
  {
    id: "gatsby",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    price: 12.99,
    description: "A classic novel about dreams, wealth, and love in 1920s America.",
    category: "Classic Fiction",
  },
  {
    id: "nineteen-eighty-four",
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    price: 10.99,
    description: "A dystopian novel about totalitarian control and surveillance.",
    category: "Dystopian",
  },
  {
    id: "hobbit",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "9780547928227",
    price: 14.99,
    description: "A fantasy adventure that follows Bilbo Baggins into Middle-earth.",
    category: "Fantasy",
  },
  {
    id: "pride-prejudice",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    price: 11.99,
    description: "A romantic classic about manners, marriage, and social class.",
    category: "Romance",
  },
  {
    id: "mockingbird",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780446310789",
    price: 13.99,
    description: "A story of justice, morality, and childhood in the American South.",
    category: "Historical Fiction",
  },
  {
    id: "brave-new-world",
    title: "Brave New World",
    author: "Aldous Huxley",
    isbn: "9780060850524",
    price: 10.99,
    description: "A futuristic novel that questions technology, control, and freedom.",
    category: "Science Fiction",
  },
];
