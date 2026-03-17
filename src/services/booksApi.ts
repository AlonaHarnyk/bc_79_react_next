import axios from "axios";
import type { Book, BookData } from "../types/books";

const booksInstance = axios.create({
  baseURL: "https://6971cf4a32c6bacb12c49096.mockapi.io",
});

export const getBooks = async (
  page: number,
  search: string,
): Promise<Book[]> => {
  const { data } = await booksInstance.get<Book[]>("/books/", {
    params: { page, limit: 7, search: search },
  });
  return data;
};

export const createBook = async (bookData: BookData) => {
  const { data } = await booksInstance.post<Book>("/books", bookData);
  return data;
};

export const deleteBook = async (id: Book["id"]) => {
  const { data } = await booksInstance.delete<Book>(`/books/${id}`);
  return data;
};
