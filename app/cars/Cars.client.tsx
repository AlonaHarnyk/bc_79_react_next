"use client"

import {useQuery} from "@tanstack/react-query";
import {getCars} from "@/lib/carApi";
import CarsList from "@/components/CarsList/CarsList";


export default function CarsClient() {
    const {
        data
    } = useQuery({
        queryKey: ["cars"],
        queryFn: getCars,
        refetchOnMount: false
    })

    return (
        <CarsList cars={data}/>
    );
}