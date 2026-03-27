export interface User {
  name: string;
  email: string;
  id: string;
  isOnline: boolean;
}

export type UserDraft = Omit<User, "id" | "isOnline">;

export type UserData = Omit<User, "id">;
