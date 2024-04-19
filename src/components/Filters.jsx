import { useId } from 'react';
import '../css/Filters.css';
import { useFilters } from '../hooks/useFilter';

export function Filters() {
    const { filters, setFilters } = useFilters();

    //Generar id
    const typeFilterId = useId();

    const handleChangeType = (event) => {
        setFilters(prevState => ({
            ...prevState,
            type: event.target.value
        }))
    }

    return(
        <section className="filtros">
       
            <div>
                <label htmlFor={ typeFilterId }>Tipo</label>
                <select name="type" id={typeFilterId} onChange={ handleChangeType }>
                    <option value="all">Todas</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Pickup">Pickup</option>
                </select>
            </div>
        </section>
    )
}