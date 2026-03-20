import { type User } from "../../types/users";
import { UserItem } from "../UserItem/UserItem";

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserItem user={user} />{" "}
        </li>
      ))}
    </ul>
  );
}
