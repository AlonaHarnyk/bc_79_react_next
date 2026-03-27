"use client";
import { addBook } from "@/lib/booksService";
import { useBookDraft } from "@/store/bookStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddBookForm() {
  const { bookData, setBookData, clearBookData } = useBookDraft();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(bookData);
    clearBookData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author
        <input
          onChange={(event) =>
            setBookData({
              ...bookData,
              author: event.target.value,
            })
          }
          type="text"
          name="author"
          value={bookData.author}
        />
      </label>
      <label>
        Title
        <input
          onChange={(event) =>
            setBookData({
              ...bookData,
              title: event.target.value,
            })
          }
          type="text"
          name="title"
          value={bookData.title}
        />
      </label>
      <label>
        Year
        <input
          onChange={(event) =>
            setBookData({
              ...bookData,
              year: Number(event.target.value),
            })
          }
          type="number"
          name="year"
          value={String(bookData.year)}
        />
      </label>
      <label>
        Description
        <textarea
          onChange={(event) =>
            setBookData({
              ...bookData,
              description: event.target.value,
            })
          }
          name="description"
          value={bookData.description}
        ></textarea>
      </label>
      <button>Add Book</button>
    </form>
  );
}
