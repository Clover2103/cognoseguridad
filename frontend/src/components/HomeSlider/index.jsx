import React from "react";
import { Link } from "react-router-dom";
import imagen1 from "../../assets/home/slider/imagen1.jpeg";
import imagen2 from "../../assets/home/slider/imagen2.jpg";
import imagen3 from "../../assets/home/slider/imagen3.jpg";
import imagen4 from "../../assets/home/slider/imagen4.jpg";
import imagen5 from "../../assets/home/slider/imagen5.jpg";
import imagen6 from "../../assets/home/slider/imagen6.jpg";
import imagen7 from "../../assets/home/slider/imagen7.jpg";
import imagen8 from "../../assets/home/slider/imagen8.jpg";
import imagen9 from "../../assets/home/slider/imagen9.jpg";
import { useCarrucel } from "../../hooks/useCarrucel";
import './HomeSlider.css';

const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9];

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
          <div className="descriptionHomeSlider">
            <h3>¡BIENVENIDOS!</h3>
            <p>"A veces tienes que pensar en algo más que en tu propia seguridad, a veces tienes que pensar en el bien mayor"</p>
            <p>Joanne Kathelen Rowling</p>
            <Link to="/curses">
              <button>
                CONOCE NUESTROS CURSOS
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="circuleHomeSlider1"></div>
      <div className="circuleHomeSlider2"></div>
      <div className="circuleHomeSlider3"></div>
      <div className="circuleHomeSlider4"></div>
      <div className="circuleHomeSlider5"></div>
      <div className="circuleHomeSlider6"></div>
      <div className="circuleHomeSlider7"></div>
      <div className="circuleHomeSlider8"></div>
      <div className="circuleHomeSlider9"></div>
      <div className="circuleHomeSlider10"></div>
      <div className="circuleHomeSlider11"></div>
      <div className="circuleHomeSlider12"></div>
      <div className="circuleHomeSlider13"></div>
    </div>
  );
};

export { HomeSlider };
