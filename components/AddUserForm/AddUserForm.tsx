import { addUser } from "@/lib/usersServices";
import { useUserStore } from "@/store/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddUserForm() {
  const { user, setUser, clearUser } = useUserStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const inputValue = e.target.value;
    setUser({ ...user, [e.target.name]: inputValue });
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ ...user, isOnline: false });
    clearUser();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
