import type {User} from "../../types/users.ts";

interface UserProps {
    user: User;
}

export function UserItem ({user}:UserProps) {
    return(<>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </>);
}