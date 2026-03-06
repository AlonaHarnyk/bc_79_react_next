import type { Dog } from "../../types";
import { Button } from "../Button/Button";
import { DogAddress } from "../DogAddress/DogAddress";

interface DogItemProps {
  dog: Dog;
}
export function DogItem({
  dog: { id, name, age, breed, isFriendly, avatar, address },
}: DogItemProps) {
  return (
    <>
      <img src={avatar} alt={name} />
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Breed:{breed}</p>
      <p>
        Friendly: <span>{isFriendly ? "yes" : "no"}</span>
      </p>
      <DogAddress address={address} />
      <Button
        text="View profile"
        clickHandler={() => {
          console.log(id);
        }}
      />
    </>
  );
}
