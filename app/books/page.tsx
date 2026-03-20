import { getBooks } from "@/lib/booksService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BooksClient from "./BooksClient";

export default async function Books() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BooksClient />
      </HydrationBoundary>
    </div>
  );
}
