import { useState } from "react";
import { getUsers } from "../../services/userApi";
import { Button } from "../Button/Button";
import { ErrorNotification } from "../ErrorNotification/ErrorNotification";
import { Loader } from "../Loader/Loader";
import { UserForm } from "../UserForm/UserForm";
import { UserList } from "../UserList/UserList";
import type { User } from "../../types/users";

export function Users() {
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
