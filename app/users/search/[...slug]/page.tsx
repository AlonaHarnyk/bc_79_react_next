import { getUsers } from "@/lib/usersServices";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SearchUsersClient from "./SearchUsersClient";

interface NameSearchPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function NameSearchPage({ params }: NameSearchPageProps) {
  const { slug } = await params;
  const searchQuery = slug[0];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users", searchQuery],
    queryFn: () => getUsers({ search: searchQuery }),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchUsersClient />
      </HydrationBoundary>
    </div>
  );
}
