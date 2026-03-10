// При монтуванні компонента App має виконувати запит за ендпоінтом https://6971cf4a32c6bacb12c49096.mockapi.io/books.
// На підставі отриманих даних відрендерити список книг. Кожен елемент списку має містити інформацію про назву книги, автора, рік видання.
// До кожного елемента списку додати кнопку View description, при натисканні на яку має відкриватись модальне вікно з описом, яка має закриватись кпопкою Close, клавішею Esc, а також клікои по бекдропу

import { useEffect, useState } from "react";
import { getBooks } from "../../services/booksApi";
import type { Book } from "../../types/books";
import { BooksList } from "../BooksList/BooksList";

export function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      const books = await getBooks();
      setBooks(books);
    }
    fetchBooks();
  }, []);

  return (
    <>
      <p>Books</p>
      <BooksList books={books} />
    </>
  );
}
