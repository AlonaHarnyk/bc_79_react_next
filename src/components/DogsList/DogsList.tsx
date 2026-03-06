import type { Dog } from "../../types";
import { DogItem } from "../DogsItem/DogsItem";
import css from "./DogsList.module.css";

interface DogsListProps {
  dogs: Dog[];
  onDelete: (id: number) => void;
}

export function DogsList({ dogs, onDelete }: DogsListProps) {
  return (
    <ul className={css.dogsList}>
      {dogs.map((item) => (
        <li key={item.id} className={css.dogsItem}>
          <DogItem dog={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
