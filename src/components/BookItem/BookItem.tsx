/*
export interface Book {
  author: string;
  title: string;
  year: number;
  description: string;
  id: string;
}
*/

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Book } from "../../types/books";
import { Button } from "../Button/Button";
import { deleteBook } from "../../services/booksApi";

interface BookItemProps {
  bookItem: Book;
  onShowModal: (description: string) => void;
}

export function BookItem({
  bookItem: { author, title, year, description, id },
  onShowModal,
}: BookItemProps) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  return (
    <>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{year}</p>
      <Button
        text="View description"
        clickHandler={() => onShowModal(description)}
      />
      <Button text="Delete Book" clickHandler={() => mutate(id)} />
    </>
  );
}
