import React from "react";
import { Link } from "react-router-dom";
import imagen1 from "../../assets/home/slider/imagen1.jpg";
import imagen2 from "../../assets/home/slider/imagen2.jpg";
import imagen3 from "../../assets/home/slider/imagen3.jpg";
import imagen4 from "../../assets/home/slider/imagen4.jpg";
import imagen5 from "../../assets/home/slider/imagen5.jpg";
import { useCarrucel } from "../../hooks/useCarrucel";
import './HomeSlider.css';

const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5];

const HomeSlider = () => {
  const { 
    currentIndex,
  } = useCarrucel(imagenes.length, true, 5000);

  return (
    <div className="bodyHomeSlider">
      <div className="img-back-HomeSlider">
        <img src={imagenes[currentIndex]} alt="Slider" className="slider-image animated-image" />
      </div>
      <div className="containerHomeSlider row g-2 mb-4">
        <div className="leftHomeSlider col-md">
          {/* Aquí podrías agregar contenido adicional si es necesario */}
        </div>
        <div className="rightHomeSlider col-md">
        </div>
      </div>
    </div>
  );
};

export { HomeSlider };
