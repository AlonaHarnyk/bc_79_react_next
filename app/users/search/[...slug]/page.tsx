import { getUsers } from "@/lib/usersServices";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SearchUsersClient from "./SearchUsersClient";
import { Metadata } from "next";

interface UsersSearchPageProps {
  params: Promise<{ slug: string[] }>;
}

export const generateMetadata = async ({
  params,
}: UsersSearchPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const searchQuery = slug[0];

  return {
    title: `Search for ${searchQuery}`,
    description: `Information by ${searchQuery}`,
  };
};

export default async function UsersSearchPage({
  params,
}: UsersSearchPageProps) {
  const { slug } = await params;
  const searchQuery = slug[0];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users", searchQuery],
    queryFn: () => getUsers({ search: searchQuery }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchUsersClient />
    </HydrationBoundary>
  );
}
