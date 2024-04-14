import React, { useState, useEffect } from "react";
import { Header, HeaderText } from "./estilo-componentes/styles-comp.jsx"
import './slick-carousel/Slick.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './components/Footer.css';
import { cars as initialProducts } from "./mocks/cars.json"
import NvLink from "./components/NavLink.jsx";
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio.jsx";
import Contact from "./components/Constact.jsx";
import About from "./components/About.jsx";
import Vehicles from "./components/Vehicles.jsx";



function App() {

  return (
    <div>
      
      <Header>
      <img src="img/Logo.png" alt="Descripción de la imagen" className="logo" />
      <HeaderText>BIENVENIDOS A RENTMYRIDE</HeaderText>
     <nav>
      <ul>
        <li><NvLink to="/">Inicio</NvLink></li>
        <li><NvLink to="/vehicles">Vehiculos</NvLink></li>
        <li><NvLink to="/contact">Contact</NvLink></li>
        <li><NvLink to="/about">Acerca de</NvLink></li>
      </ul>
     </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vehicles" element={<Vehicles/>}/>
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>

    </div>
  );
}

export default App;
