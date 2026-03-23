"use client";
import { useRouter } from "next/navigation";

export default function SearchBooksBar() {
  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("bookname") as string;
    const trimmedName = name.trim();
    if (trimmedName.length !== 0) router.push(`/books/search/${trimmedName}`);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" placeholder="Search book..." name="bookname" />
      <button type="submit">Search</button>
    </form>
  );
}
