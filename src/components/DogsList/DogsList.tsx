import type { Dog } from "../../types";
import { DogItem } from "../DogsItem/DogsItem";
import css from "./DogsList.module.css";

interface DogsListProps {
  dogs: Dog[];
}

export function DogsList({ dogs }: DogsListProps) {
  return (
    <ul className={css.dogsList}>
      {dogs.map((item) => (
        <li key={item.id} className={css.dogsItem}>
          <DogItem dog={item} />
        </li>
      ))}
    </ul>
  );
}
