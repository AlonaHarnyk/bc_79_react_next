import { User } from "@/types/users";
import axios from "axios";

const usersInstance = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export const getUsers = async (): Promise<User[]> => {
  const { data } = await usersInstance.get<User[]>("/users");
  return data;
};

export const getUsersById = async (id: User["id"]): Promise<User> => {
  const { data } = await usersInstance.get<User>(`/users/${id}`);
  return data;
};
