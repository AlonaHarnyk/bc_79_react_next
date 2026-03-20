import Link from "next/link";
import { type Book } from "../../types/books";

interface BooksListProps {
  books: Book[];
}

export function BooksList({ books }: BooksListProps) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Link href={`/books/${book.id}`}>{book.title}</Link>
        </li>
      ))}
    </ul>
  );
}
