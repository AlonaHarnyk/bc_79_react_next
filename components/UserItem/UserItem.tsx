import Link from "next/link.js";
import type { User } from "../../types/users.ts";

interface UserProps {
  user: User;
}

export function UserItem({ user }: UserProps) {
  return <Link href={`/users/${user.id}`}>{user.name}</Link>;
}
