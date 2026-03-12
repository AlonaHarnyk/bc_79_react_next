interface SearchUserInputProps {
  onSearchUser: (currentUser: string) => void;
}

export default function SearchUsersInput({
  onSearchUser,
}: SearchUserInputProps) {
  const handleInputSubmit = (formData: FormData) => {
    const currentUser = formData.get("searchUser") as string;
    if (currentUser.trim() === "") return;
    onSearchUser(currentUser);
  };
  return (
    <>
      <form action={handleInputSubmit}>
        <input type="text" name="searchUser" />
        <button>Search</button>
      </form>
    </>
  );
}
