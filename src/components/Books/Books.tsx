// При монтуванні компонента App має виконувати запит за ендпоінтом https://6971cf4a32c6bacb12c49096.mockapi.io/books.
// На підставі отриманих даних відрендерити список книг. Кожен елемент списку має містити інформацію про назву книги, автора, рік видання.
// До кожного елемента списку додати кнопку View description, при натисканні на яку має відкриватись модальне вікно з описом, яка має закриватись кпопкою Close, клавішею Esc, а також клікои по бекдропу

import { useState } from "react";
import { getBooks } from "../../services/booksApi";
import { BooksList } from "../BooksList/BooksList";
import { Modal } from "../Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import { ErrorNotification } from "../ErrorNotification/ErrorNotification";
import { Loader } from "../Loader/Loader";
import ReactPaginate from "react-paginate";

const pageCount = 8;

export function Books() {
  const [description, setDescription] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["books", currentPage],
    queryFn: () => getBooks(currentPage),
  });

  const onShowModal = (description: string) => {
    setDescription(description);
  };

  return (
    <>
      <p>Books</p>
      {data && data.length > 0 && (
        <>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={({ selected }) => {
              setCurrentPage(selected + 1);
            }}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
          <BooksList books={data} onShowModal={onShowModal} />
        </>
      )}
      {description && (
        <Modal onClose={() => setDescription(null)}>
          <p>{description}</p>
        </Modal>
      )}
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
    </>
  );
}
