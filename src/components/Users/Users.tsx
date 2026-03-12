import { useState } from "react";
import { getUsers } from "../../services/userApi";
import { Button } from "../Button/Button";
import { ErrorNotification } from "../ErrorNotification/ErrorNotification";
import { Loader } from "../Loader/Loader";
import { UserForm } from "../UserForm/UserForm";
import { UserList } from "../UserList/UserList";
import { useQuery } from "@tanstack/react-query";
import SearchUsersInput from "../SearchUsersInput/SearchUsersInput";

export function Users() {
  const [isFormShow, setIsFormShow] = useState<boolean>(false);
  const [isListShown, setIsListShown] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", isListShown, inputValue],
    queryFn: () => getUsers(inputValue),
    enabled: isListShown,
  });

  const showUsers = () => {
    setIsListShown(true);
  };

  const showForm = () => {
    setIsFormShow(true);
  };

  const closeForm = () => {
    setIsFormShow(false);
  };

  const searchUser = (searchValue: string) => {
    setInputValue(searchValue);
  };
  console.log(inputValue);
  return (
    <>
      {!isListShown && (
        <Button text="Show users list" clickHandler={showUsers} />
      )}
      {users && users.length > 0 && (
        <>
          <SearchUsersInput onSearchUser={searchUser} />
          <UserList users={users} />
          {isFormShow === false ? (
            <Button text="Add user" clickHandler={showForm} />
          ) : (
            <UserForm onClose={closeForm} />
          )}
        </>
      )}

      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
    </>
  );
}
