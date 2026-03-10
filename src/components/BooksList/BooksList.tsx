import { type Book } from "../../types/books";
import { BookItem } from "../BookItem/BookItem";

interface BooksListProps {
  books: Book[];
}

export function BooksList({ books }: BooksListProps) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BookItem bookItem={book} />
        </li>
      ))}
    </ul>
  );
}
