import { User } from "@/types/users";
import axios from "axios";

const usersInstance = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

interface getUsersProps {
  search?: string;
}

export const getUsers = async ({ search }: getUsersProps): Promise<User[]> => {
  const { data } = await usersInstance.get<User[]>(`/users`, {
    params: {
      search,
    },
  });
  return data;
};

export const getUsersById = async (id: User["id"]): Promise<User> => {
  const { data } = await usersInstance.get<User>(`/users/${id}`);
  return data;
};
