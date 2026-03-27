"use client";
import AddBookForm from "@/components/AddBookForm/AddBookForm";
import { BooksList } from "@/components/BookList/BookList";
import { ErrorNotification } from "@/components/ErrorNotification/ErrorNotification";
import { Loader } from "@/components/Loader/Loader";
import SearchBooksBar from "@/components/SearchBooksBar/SearchBooksBar";
import { getBooks } from "@/lib/booksService";
import { useQuery } from "@tanstack/react-query";

export default function BooksClient() {
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
    refetchOnMount: false,
  });
  return (
    <>
      {books && books.length > 0 && (
        <>
          <AddBookForm />
          <SearchBooksBar />
          <BooksList books={books} />
        </>
      )}
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
    </>
  );
}
