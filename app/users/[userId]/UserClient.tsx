"use client";
import { ErrorNotification } from "@/components/ErrorNotification/ErrorNotification";
import { Loader } from "@/components/Loader/Loader";
import { getUsersById } from "@/lib/usersServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function UserClient() {
  const { userId } = useParams<{ userId: string }>();
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userById"],
    queryFn: () => getUsersById(userId),
  });
  return (
    <>
      {user && (
        <>
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p> Is online: {user.isOnline ? "Yes" : "No"}</p>
          </div>
          {isError && <ErrorNotification />}
          {isLoading && <Loader />}
        </>
      )}
    </>
  );
}
