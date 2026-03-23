import { User } from "@/types/users";
import axios from "axios";

const usersInstance = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

interface GetUsersProps {
  search?: string;
}

export const getUsers = async ({ search }: GetUsersProps): Promise<User[]> => {
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
