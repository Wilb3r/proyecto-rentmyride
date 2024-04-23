import React, { useState } from "react";
import { Header, HeaderText } from "./estilo-componentes/styles-comp.jsx"
import NvLink from './components/NavLink.jsx';
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import { Vehicles } from "./components/Vehicles.jsx";
import { cars as initialCars } from "./mocks/cars.json"
import { useFilters } from "./hooks/useFilter.jsx";

function App() {
  const [cars] = useState(initialCars);

  const { filterCars } = useFilters();
  
  const filteredCars = filterCars(cars);
  
  return (
    <div>
      
      <Header>
      <img src="img/Logo.png" alt="Descripción de la imagen" className="logo" />
      <HeaderText>BIENVENIDOS A RENTMYRIDE</HeaderText>
     <nav>
      <ul className="nav-link">
        <li><NvLink to="/">Inicio</NvLink></li>
        <li><NvLink to="/vehicles">Vehículos</NvLink></li>
        <li><NvLink to="/contact">Contact</NvLink></li>
        <li><NvLink to="/about">Acerca de</NvLink></li>
      </ul>
     </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vehicles" element={<Vehicles cars={filteredCars}/>}/>
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>

    </div>
  );
}

export default App;
