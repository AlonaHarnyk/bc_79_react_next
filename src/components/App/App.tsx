// Створити компонент App,
// в якому рендерити кнопку Show users,                                     компонент
// при натисканні на яку робити запит на бекенд                             ts c pfgbnj
// за адресою https://6240d2109b450ae274385b44.mockapi.io/api/users
// і рендерити список користувачів.                                         компонент
// Кнопка Show users має зникнути після того, як список відрендериться.     стан

import { useState } from "react";
import { getUsers } from "../../services/userApi";
import Button from "../Button/Button";
import type { User } from "../../types/users";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const showUsers = async () => {
    const users = await getUsers();

    setUsers(users);
  };

  return (
    <>
      <Button text="Show users" clickHandler={showUsers} />
    </>
  );
}

export default App;
