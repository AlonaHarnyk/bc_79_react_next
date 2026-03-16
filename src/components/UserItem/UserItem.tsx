import type { User } from "../../types/users.ts";
import { Button } from "../Button/Button.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../services/userApi.ts";

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

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Button clickHandler={() => mutate(user.id)} text={"Delete user"} />
    </>
  );
}
