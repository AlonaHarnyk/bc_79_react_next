import { Metadata } from "next";
import { getBooksById } from "@/lib/booksService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BookClient from "./BookClient";

interface BookProps {
  params: Promise<{ bookId: string }>;
}

export async function generateMetadata ({ params }: BookProps): Promise<Metadata>{
  const { bookId } =  await params;
  const book = await getBooksById(bookId);
  return {
    title: book.title,
    description: book.description
  }
}

export default async function Book({ params }: BookProps) {
  const queryClient = new QueryClient();
  const { bookId } = await params;
  await queryClient.prefetchQuery({
    queryKey: ["books"],
    queryFn: () => getBooksById(bookId),
  });
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BookClient />
      </HydrationBoundary>
    </>
  );
}
