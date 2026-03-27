"use client";

import { ErrorNotification } from "@/components/ErrorNotification/ErrorNotification";
import { Loader } from "@/components/Loader/Loader";
import { getBooksById } from "@/lib/booksService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function BookClient() {
  const { bookId } = useParams<{ bookId: string }>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["book"],
    queryFn: () => getBooksById(bookId),
    refetchOnMount: false,
  });
  return (
    <>
      {data && (
        <>
          <h3>{data.title}</h3>
          <p>{data.author}</p>
          <p>{data.year}</p>
        </>
      )}
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
    </>
  );
}
