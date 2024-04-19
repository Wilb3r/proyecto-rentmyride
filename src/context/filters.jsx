import { createContext, useState } from "react";

//Creamos contexto
export const FiltersContext = createContext();

//Proveer Contextos
export function FiltersProvider ({ children }){
    const [filters, setFilters] = useState({
        type: 'all'
    });

    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            { children }
        </FiltersContext.Provider>
    )
}