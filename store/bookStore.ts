import { BookData } from "@/types/books";
import { create } from "zustand";

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

export const useBookDraft = create<BookDraft>()((set) => {
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
});
