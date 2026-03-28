import {Car} from "@/types/cars";

interface CarsProps {
    cars: Car[];
}

export default function CarsList({cars}: CarsProps) {
    return (<ul>
            {cars.map(({model, type, vin, fuel, color, id}) => {
                return <li key={id}>
                    <h2>Model:{model}</h2>
                    <p>Type:{type}</p>
                    <p>Vin:{vin}</p>
                    <p>Fuel:{fuel}</p>
                    <p>Color:{color}</p>
                </li>
            })}
        </ul>
    );
}