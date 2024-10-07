import React from "react";
import { Link } from "react-router-dom";
import imagen from "../../assets/home/slider/imagenSlider.png";
import back from "../../assets/contact/back.jpeg";
import './HomeSlider.css';

const HomeSlider = () => {
  return (
    <div className="bodyHomeSlider">
      <div className="img-back-HomeSlider">
        <img src={back} alt="back" />
      </div>
      <div className="containerHomeSlider row g-2 mb-4">
        <div className="leftHomeSlider col-md">
          {/* <img src={imagen} alt="Slider" /> */}
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

export { HomeSlider }