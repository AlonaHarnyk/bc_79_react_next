import type { User } from "../../types/users.ts";
import { Button } from "../Button/Button.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser, updateUser } from "../../services/userApi.ts";

interface UserProps {
  user: User;
}

export function UserItem({ user }: UserProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const { mutate: updateUserStatus } = useMutation({
    mutationFn: updateUser,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p> Is online: {user.isOnline ? "Yes" : "No"}</p>
      <Button clickHandler={() => mutate(user.id)} text={"Delete user"} />
      <Button
        clickHandler={() =>
          updateUserStatus({ id: user.id, status: !user.isOnline })
        }
        text={"Toggle status"}
      />
    </>
  );
}
