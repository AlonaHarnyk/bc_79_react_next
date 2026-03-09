// Створити компонент App,
// в якому рендерити кнопку Show users,                                     компонент
// при натисканні на яку робити запит на бекенд                             ts c pfgbnj
// за адресою https://6240d2109b450ae274385b44.mockapi.io/api/users
// і рендерити список користувачів.                                         компонент
// Кнопка Show users має зникнути після того, як список відрендериться.     стан

// Cтворити форму додавання користувача (форма має містити 2 текстових інпути - для введення імені та пошти). Форма має відкриватись по кнопці Add user, яка має рендеритись під списком юзерів (за уиови, що останній відрендерений). Коли форма відкрита, кнопка Add user має зникнути. При сабміті форми дані мають виводитись в консоль, форма зникати, натомість повертатись кнопка Add user.

import { useState } from "react";
import { getUsers } from "../../services/userApi";
import { Button } from "../Button/Button";
import type { User } from "../../types/users";
import { UserList } from "../UserList/UserList";
import { ErrorNotification } from "../ErrorNotification/ErrorNotification.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { UserForm } from "../UserForm/UserForm.tsx";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [isFormShow, setIsFormShow] = useState<boolean>(false);

  const [isError, setIsError] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const showUsers = async () => {
    try {
      setIsError(false);
      setLoading(true);
      const users = await getUsers();

      setUsers(users);
    } catch {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const showForm = () => {
    setIsFormShow(true);
  };

  const closeForm = () => {
    setIsFormShow(false);
  };

  return (
    <>
      {users.length === 0 ? (
        <Button text="Show users" clickHandler={showUsers} />
      ) : (
        <>
          <UserList users={users} />
          {isFormShow === false ? (
            <Button text="Add user" clickHandler={showForm} />
          ) : (
            <UserForm onClose={closeForm} />
          )}
        </>
      )}
      {isError && <ErrorNotification />}
      {loading && <Loader />}
    </>
  );
}

export default App;
