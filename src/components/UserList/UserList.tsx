import {type User} from "../../types/users"
import {UserItem} from "../UserItem/User.tsx";

interface UserListProps { users: User[] }

export function UserList({ users }: UserListProps) {
    console.log(users);
    return <ul>{users.map((user) => <li key={user.id}><UserItem user={user}/> </li>) }</ul>
}