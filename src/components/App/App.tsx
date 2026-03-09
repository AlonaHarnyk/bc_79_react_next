// Створити компонент App,
// в якому рендерити кнопку Show users,                                     компонент
// при натисканні на яку робити запит на бекенд                             ts c pfgbnj
// за адресою https://6240d2109b450ae274385b44.mockapi.io/api/users
// і рендерити список користувачів.                                         компонент
// Кнопка Show users має зникнути після того, як список відрендериться.     стан

import { useState } from "react";
import { getUsers } from "../../services/userApi";
import {Button} from "../Button/Button";
import type { User } from "../../types/users";
import { UserList } from "../UserList/UserList";
import {ErrorNotification} from "../ErrorNotification/ErrorNotification.tsx";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [isError, setIsError] = useState<boolean>(false);

  const showUsers = async () => {
    try {
        const users = await getUsers();

        setUsers(users);
    } catch {
        setIsError(true);
    }
  };

  return (
      <>
          {users.length === 0 ?
              <Button text="Show users" clickHandler={showUsers}/> : <UserList users={users}/>}
          {isError && <ErrorNotification/>}
      </>


  );
}

export default App;
