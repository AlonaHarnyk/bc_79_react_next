import type { DebouncedState } from "use-debounce";

interface SearchBookInputProps {
  onSearch: DebouncedState<React.Dispatch<React.SetStateAction<string>>>;
  value: string;
}

export function SearchBookInput({ onSearch, value }: SearchBookInputProps) {
  return (
    <input
      defaultValue={value}
      type="text"
      name="search"
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}
