import { getUsersById } from "@/lib/usersServices";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import UserClient from "./UserClient";
import { Metadata } from "next";

interface UserProps {
  params: Promise<{ userId: string }>;
}

export const generateMetadata = async ({
  params,
}: UserProps): Promise<Metadata> => {
  const { userId } = await params;
  const { name } = await getUsersById(userId);

  return {
    title: `User: ${name}`,
    description: `Information about user - ${name}`,
  };
};

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
