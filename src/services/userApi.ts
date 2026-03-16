import axios from "axios";
import { type User, type UserData } from "../types/users";

// Створити компонент App,
// в якому рендерити кнопку Show users,                                     компонент
// при натисканні на яку робити запит на бекенд                             ts c pfgbnj
// за адресою https://6240d2109b450ae274385b44.mockapi.io/api/users
// і рендерити список користувачів.                                         компонент
// Кнопка Show users має зникнути після того, як список відрендериться.     стан

const usersInstance = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export const getUsers = async (name?: string): Promise<User[]> => {
  const res = await usersInstance.get<User[]>("/users", {
    params: {
      search: name,
    },
  });
  return res.data;
};
export const addUser = async (userData: UserData) => {
  const { data } = await usersInstance.post<User>("/users", userData);
  return data;
};

export const deleteUser = async (id: User["id"]) => {
  const { data } = await usersInstance.delete<User>(`/users/${id}`);
  return data;
};
