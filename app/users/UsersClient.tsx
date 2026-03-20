"use client";

import { ErrorNotification } from "@/components/ErrorNotification/ErrorNotification";
import { Loader } from "@/components/Loader/Loader";
import { UserList } from "@/components/UserList/UserList";
import { getUsers } from "@/lib/usersServices";
import { useQuery } from "@tanstack/react-query";

export default function UsersClient() {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    refetchOnMount: false,
  });

  return (
    <>
      {users && users.length > 0 && (
        <>
          <UserList users={users} />
          {isError && <ErrorNotification />}
          {isLoading && <Loader />}
        </>
      )}
    </>
  );
}
