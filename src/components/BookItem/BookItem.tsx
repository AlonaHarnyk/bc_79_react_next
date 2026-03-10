/*
export interface Book {
  author: string;
  title: string;
  year: number;
  description: string;
  id: string;
}
*/

import type { Book } from "../../types/books";

interface BookItemProps {
  bookItem: Book;
}

export function BookItem({ bookItem: { author, title, year } }: BookItemProps) {
  return (
    <>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{year}</p>
    </>
  );
}
