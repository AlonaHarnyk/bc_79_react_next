import type { Dog } from "../../types";
import { DogAddress } from "../DogAddress/DogAddress";

interface DogItemProps {
  dog: Dog;
}
export function DogItem({
  dog: { name, age, breed, isFriendly, avatar, address },
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
    </>
  );
}
