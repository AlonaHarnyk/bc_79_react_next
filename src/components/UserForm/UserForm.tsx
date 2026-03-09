import { useId } from "react";

interface UserFormProps {
  onClose: () => void;
}

export function UserForm({ onClose }: UserFormProps) {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const userData = {
      name,
      email,
    };

    console.log(userData);

    onClose();
  };

  return (
    <>
      <form action={handleSubmit}>
        <label htmlFor={`${id}-name`}></label>
        <input type="text" id={`${id}-name`} name="name" />

        <label htmlFor={`${id}-email`}></label>
        <input type="email" id={`${id}-email`} name="email" />

        <button type="submit">Add</button>
      </form>
    </>
  );
}
