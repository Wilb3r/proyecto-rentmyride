import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext);

    const filterCars = (cars) => {
        return cars.filter(car =>{
            return (
                filters.type === 'all' ||
                car.type === filters.type
            )
        })
    }
    return { filters, filterCars, setFilters }
}