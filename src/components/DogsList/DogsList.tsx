import type { Dog } from "../../types";
import { DogItem } from "../DogsItem/DogsItem";
import css from "./DogsList.module.css";

interface DogsListProps {
  dogs: Dog[];
  onDelete: (id: number) => void;
  onChangeStatus: (id: number) => void;
}

export function DogsList({ dogs, onDelete, onChangeStatus }: DogsListProps) {
  return (
    <ul className={css.dogsList}>
      {dogs.map((item) => (
        <li key={item.id} className={css.dogsItem}>
          <DogItem
            dog={item}
            onDelete={onDelete}
            onChangeStatus={onChangeStatus}
          />
        </li>
      ))}
    </ul>
  );
}

// Додати до компонента елемента списку кнопку Change status of friendliness , при натисканні на яку статус тварини має змінюватись на протилежний.
