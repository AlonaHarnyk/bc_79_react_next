import type { Address } from "../../types";

interface DogAddressProps {
  address: Address;
}

export function DogAddress({
  address: { country, city, street },
}: DogAddressProps) {
  return (
    <>
      <p>Address:</p>
      <p>Country: {country}</p>
      <p>City: {city}</p>
      <p>Street: {street}</p>
    </>
  );
}
