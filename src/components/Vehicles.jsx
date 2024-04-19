import '../css/Cars.css'
import React, { useState} from "react";
import { cars as initialCars } from "../mocks/cars.json"
import { Filters } from './Filters';
import { useFilters } from '../hooks/useFilter';
import { FiltersProvider } from '../context/filters';

 export function Vehicles( {cars} ){
    

    return (
        <>
        <Filters />
        <main className="cars">
            
            <ul>
                {
                    cars.slice(0,9).map((car) => {

                        return (
                            <li key={car.id}>
                                <img src={car.thumbnail} alt={car.Manufacturer} />
                                <div>
                                    <strong>
                                        {car.Manufacturer} - ${(car.price*0.002).toFixed(2)}
                                    </strong>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
        </>
    )
 };
