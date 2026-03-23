"use client";

import { BooksList } from "@/components/BookList/BookList";
import { getBooks } from "@/lib/booksService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function SearchBooksClient() {
  const { slug } = useParams<{ slug: string[] }>();
  const searchQuery = slug[0];

  const { data } = useQuery({
    queryKey: ["books", searchQuery],
    queryFn: () => getBooks(searchQuery),
    refetchOnMount: false,
  });
  return <>{data && data.length > 0 && <BooksList books={data} />}</>;
}
