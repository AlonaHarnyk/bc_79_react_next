import { UserDraft } from "@/types/users";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  user: UserDraft;
  setUser: (user: UserDraft) => void;
  clearUser: () => void;
}

const initialUser: UserDraft = {
  name: "",
  email: "",
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: initialUser,
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: initialUser }),
    }),
    {
      name: "user-draft",
      partialize: (state) => ({ user: state.user }),
    },
  ),
);
