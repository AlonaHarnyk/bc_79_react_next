import { type Book } from "../../types/books";
import { BookItem } from "../BookItem/BookItem";

interface BooksListProps {
  books: Book[];
  onShowModal: (description: string) => void;
}

export function BooksList({ books, onShowModal }: BooksListProps) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BookItem bookItem={book} onShowModal={onShowModal} />
        </li>
      ))}
    </ul>
  );
}
