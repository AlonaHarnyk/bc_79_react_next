// При монтуванні компонента App має виконувати запит за ендпоінтом https://6971cf4a32c6bacb12c49096.mockapi.io/books.
// На підставі отриманих даних відрендерити список книг. Кожен елемент списку має містити інформацію про назву книги, автора, рік видання.
// До кожного елемента списку додати кнопку View description, при натисканні на яку має відкриватись модальне вікно з описом, яка має закриватись кпопкою Close, клавішею Esc, а також клікои по бекдропу

import { useState } from "react";
import { getBooks } from "../../services/booksApi";
import { BooksList } from "../BooksList/BooksList";
import { Modal } from "../Modal/Modal";
import { useQuery } from "@tanstack/react-query";

export function Books() {
  const [description, setDescription] = useState<string | null>(null);

  const { data } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  const onShowModal = (description: string) => {
    setDescription(description);
  };

  return (
    <>
      <p>Books</p>
      {data && data.length > 0 && (
        <BooksList books={data} onShowModal={onShowModal} />
      )}
      {description && (
        <Modal onClose={() => setDescription(null)}>
          <p>{description}</p>
        </Modal>
      )}
    </>
  );
}
