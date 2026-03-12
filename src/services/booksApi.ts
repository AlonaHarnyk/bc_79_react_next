import axios from "axios";
import type { Book } from "../types/books";

const booksInstance = axios.create({
  baseURL: "https://6971cf4a32c6bacb12c49096.mockapi.io",
});

export const getBooks = async (page: number): Promise<Book[]> => {
  const { data } = await booksInstance.get<Book[]>("/books/", {
    params: { page, limit: 7 },
  });
  return data;
};
