// При монтуванні компонента App має виконувати запит за ендпоінтом https://6971cf4a32c6bacb12c49096.mockapi.io/books.
// На підставі отриманих даних відрендерити список книг. Кожен елемент списку має містити інформацію про назву книги, автора, рік видання.
// До кожного елемента списку додати кнопку View description, при натисканні на яку має відкриватись модальне вікно з описом, яка має закриватись кпопкою Close, клавішею Esc, а також клікои по бекдропу

import { useEffect, useState } from "react";
import { getBooks } from "../../services/booksApi";
import type { Book } from "../../types/books";
import { BooksList } from "../BooksList/BooksList";
import { Modal } from "../Modal/Modal";

export function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  const [description, setDescription] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBooks() {
      const books = await getBooks();
      setBooks(books);
    }
    fetchBooks();
  }, []);

  const onShowModal = (description: string) => {
    setDescription(description);
  };

  return (
    <>
      <p>Books</p>
      <BooksList books={books} onShowModal={onShowModal} />
      {description && (
        <Modal
          onClose={() => {
            console.log("Close");
          }}
        >
          <p>{description}</p>
        </Modal>
      )}
    </>
  );
}
