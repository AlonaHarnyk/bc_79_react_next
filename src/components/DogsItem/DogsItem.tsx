import { useState } from "react";
import type { Dog } from "../../types";
import { Button } from "../Button/Button";
import { DogAddress } from "../DogAddress/DogAddress";

interface DogItemProps {
  dog: Dog;
  onDelete: (id: number) => void;
  onChangeStatus: (id: number) => void;
}
export function DogItem({
  dog: { id, name, age, breed, isFriendly, avatar, address },
  onDelete,
  onChangeStatus,
}: DogItemProps) {
  
  const [isAddressVisible, setIsAddressVisible] = useState(false);

  const toggleAddressVisibility = () => {
    setIsAddressVisible(!isAddressVisible);
  };

  const handleDelete = (): void => {
    onDelete(id);
  };

  const handleToggleStatus = (): void => {
    onChangeStatus(id);
  };
  return (
    <>
      <img src={avatar} alt={name} />
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Breed:{breed}</p>
      <p>
        Friendly: <span>{isFriendly ? "yes" : "no"}</span>
      </p>
      <Button
        text={isAddressVisible ? "Hide address" : "Show address"}
        clickHandler={toggleAddressVisibility}
      />
      {isAddressVisible && <DogAddress address={address} />}

      <Button
        text="View profile"
        clickHandler={() => {
          console.log(id);
        }}
      />
      <Button text="Delete" clickHandler={handleDelete} />
      <Button
        text="Change status of friendliness"
        clickHandler={handleToggleStatus}
      />
    </>
  );
}

// Створити всередині компонента елемента списку кнопку "Show address", при натисканні на яку має відображатись адреса тварини (початково ці дані повинні бути приховані), а текстовй контент кнопки має змінюватись на "Hide address" (при натисканні адреса має приховуватись).
