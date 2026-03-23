"use client";
import { useRouter } from "next/navigation";

export default function SearchUsersBar() {
  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("username") as string;
    if (name.trim().length !== 0) {
      router.push(`/users/search/${name}`);
    }
  };

  return (
    <form action={handleSubmit}>
      <input type="text" placeholder="Search user..." name="username" />
      <button type="submit">Search</button>
    </form>
  );
}
