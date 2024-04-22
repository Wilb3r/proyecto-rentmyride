import React, { useState, useEffect } from "react";
import '../css/Slick.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '../css/Footer.css';

const Inicio = () => {

   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
   const interval = setInterval(() => {
     // Cambiar o volver a la misma imagen
       setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // se cambia por el numero de imagenes
     }, 5000); // el tiempo que se cambia en milisegundos

   return () => clearInterval(interval);
   }, []);
   
    return(
        <div>
        <Carousel className="carrusel-container" selectedItem={currentSlide}>
        <div className="slider-item">
          <img src="img/img1.jpg" alt="Imagen 1" />
        </div>
        <div className="slider-item">
          <img src="img/img2.jpg" alt="Imagen 2" />
        </div>
        <div className="slider-item">
          <img src="img/img3.jpg" alt="Imagen 3" />
        </div>
        <div className="slider-item">
          <img src="img/img4.jpg" alt="Imagen 4" />
        </div>
        <div className="slider-item">
          <img src="img/img5.jpg" alt="Imagen 5" />
        </div>
      </Carousel>


      <footer className="footer">
      <div className="redes-sociales">
        <a href="#"><img src="img/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="img/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="img/instagram.png" alt="Instagram" /></a>
      </div>
    </footer>
    </div>
    );
}

export default Inicio;