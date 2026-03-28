"use client";

import { useQuery } from "@tanstack/react-query";
import { getCars } from "@/lib/carApi";
import CarsList from "@/components/CarsList/CarsList";
import { useState } from "react";
import SearchInput from "@/components/SearchInput/SearchInput";

export default function CarsClient() {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
    refetchOnMount: false,
  });

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  const filteredCars = data?.filter(({ model }) =>
    model.toLowerCase().includes(query.toLowerCase()),
  );
  console.log("🚀 ~ CarsClient ~ filteredCars:", filteredCars);
  return (
    <>
      {filteredCars && filteredCars.length > 0 && (
        <>
          <SearchInput onSearch={handleSearch} />
          <CarsList cars={filteredCars} />
        </>
      )}
      {isLoading && <p>Waiting is loading</p>}
    </>
  );
}
