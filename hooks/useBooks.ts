import { useMemo } from "react";
import { books } from "@/data/books";

export function useBooks() {
  return useMemo(() => books, []);
}
