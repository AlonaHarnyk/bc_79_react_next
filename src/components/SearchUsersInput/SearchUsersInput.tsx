import type { DebouncedState } from "use-debounce";

interface SearchUserInputProps {
  onSearchUser: DebouncedState<React.Dispatch<React.SetStateAction<string>>>;
  value: string;
}

export default function SearchUsersInput({
  onSearchUser,
  value,
}: SearchUserInputProps) {
  return (
    <input
      defaultValue={value}
      type="text"
      name="searchUser"
      onChange={(event) => {
        onSearchUser(event.target.value);
      }}
    />
  );
}
