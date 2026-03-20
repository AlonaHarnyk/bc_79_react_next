import { getUsersById } from "@/lib/usersServices";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import UserClient from "./UserClient";

interface UserProps {
  params: Promise<{ userId: string }>;
}

export default async function User({ params }: UserProps) {
  const { userId } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["userById"],
    queryFn: () => getUsersById(userId),
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <UserClient />
      </HydrationBoundary>
    </div>
  );
}
