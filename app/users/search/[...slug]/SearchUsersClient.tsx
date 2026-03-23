"use client";

import { UserList } from "@/components/UserList/UserList";
import { getUsers } from "@/lib/usersServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function SearchUsersClient() {
  const { slug } = useParams<{ slug: string[] }>();
  const search = slug[0];

  const { data } = useQuery({
    queryKey: ["users", search],
    queryFn: () => getUsers({ search }),
    refetchOnMount: false,
  });

  return <>{data && data.length > 0 && <UserList users={data} />}</>;
}
