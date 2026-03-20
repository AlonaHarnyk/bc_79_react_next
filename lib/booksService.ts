import { Book } from "@/types/books";
import axios from "axios";

const booksInstance = axios.create({
  baseURL: "https://6971cf4a32c6bacb12c49096.mockapi.io",
});

export const getBooks = async (): Promise<Book[]> => {
  const { data } = await booksInstance.get<Book[]>("/books/");
  return data;
};

export const getBooksById = async (id: Book["id"]): Promise<Book> => {
  const { data } = await booksInstance.get<Book>(`/books/${id}`);
  return data;
};
