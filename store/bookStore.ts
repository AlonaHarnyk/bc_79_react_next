import { BookData } from "@/types/books";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookDraft {
  bookData: BookData;
  setBookData: (newBookData: BookData) => void;
  clearBookData: () => void;
}

const initialBookData: BookData = {
  author: "",
  title: "",
  year: 0,
  description: "",
};

export const useBookDraft = create<BookDraft>()(
  persist(
    (set) => {
      return {
        bookData: initialBookData,
        setBookData: (newBookData) => {
          set({
            bookData: newBookData,
          });
        },
        clearBookData: () => {
          set({
            bookData: initialBookData,
          });
        },
      };
    },
    {
      name: "book-draft",
      partialize: (state) => ({ bookData: state.bookData }),
    },
  ),
);

/* 
(set) => {
  return {
    bookData: initialBookData,
    setBookData: (newBookData) => {
      set({
        bookData: newBookData,
      });
    },
    clearBookData: () => {
      set({
        bookData: initialBookData,
      });
    },
  };
}
*/
