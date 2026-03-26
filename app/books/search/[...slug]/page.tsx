import { Metadata } from "next";
import { getBooks } from "@/lib/booksService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import SearchBooksClient from "./SearchBooksClient";

interface BooksSearchPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({params}: BooksSearchPageProps): Promise<Metadata> {
  const {slug} = await params;
  const searchQuery = slug[0];
  return {
    title: `Books by keyword:${searchQuery}`,
    description: `Books find by keyword: ${searchQuery}`,
  };
}

export default async function BooksSearchPage({
  params,
}: BooksSearchPageProps) {
  const { slug } = await params;
  const searchQuery = slug[0];
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["books", searchQuery],
    queryFn: () => getBooks(searchQuery),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchBooksClient />
    </HydrationBoundary>
  );
}
