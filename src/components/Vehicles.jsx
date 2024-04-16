import '../css/Cars.css'
import React, { useState} from "react";
import { cars as initialCars } from "../mocks/cars.json"

 const Vehicles = () => {
    const [cars] = useState(initialCars);
    return (
        <main className="cars">
            <ul>
                {
                    cars.slice(0,9).map((car) => {

                        return (
                            <li key={car.id}>
                                <img src={car.thumbnail} alt={car.Manufacturer} />
                                <div>
                                    <strong>
                                        {car.Manufacturer} - ${car.price*0.004}
                                    </strong>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
 };

 export default Vehicles;