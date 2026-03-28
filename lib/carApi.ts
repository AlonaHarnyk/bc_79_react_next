import axios from "axios";
import {Car} from "@/types/cars";

const api = axios.create({baseURL: "https://69c795a163393440b316ddb8.mockapi.io"});

export async function getCars(): Promise<Car[]> {
    const {data} = await api.get<Car[]>("/cars");
    return data;
}

