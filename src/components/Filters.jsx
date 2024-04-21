import { useId } from "react";
import "../css/Filters.css";
import { useFilters } from "../hooks/useFilter";
import Dropdown from "react-bootstrap/Dropdown";

export function Filters() {
  const { filters, setFilters } = useFilters();

  //Generar id
  const typeFilterId = useId();

  const handleChangeType = (type) => {
    setFilters((prevState) => ({
      ...prevState,
      type: type,
    }));
  };

  return (
    <div>
      <footer className="footer2">
        <div className="">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <label htmlFor={typeFilterId}>Tipo de auto</label>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleChangeType("all")}>
                Todos
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleChangeType("Hatchback")}>
                Hatchback
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleChangeType("Sedan")}>
                Sedan
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleChangeType("SUV")}>
                SUV
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleChangeType("Pickup")}>
                Pickup
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </footer>
    </div>
  );
}
