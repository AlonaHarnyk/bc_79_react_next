import {type User} from "../../types/users"

interface UserListProps { users: User[] }

export function UserList({ users }: UserListProps) {
    console.log(users);
    return <ul>{users.map((user) => <li key={user.id}>{ user.name}</li>) }</ul>
}