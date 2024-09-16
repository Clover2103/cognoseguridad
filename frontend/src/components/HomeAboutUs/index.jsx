import React from "react";
import "./HomeAboutUs.css";
import imagen from "../../assets/home/aboutUs/aboutUs.png";

const HomeAboutUs = () => {
  return (
    <div className="bodyHomeAboutUs">
      <div className="contentHomeAboutUs row g-2 w-100 p-5">
        <div className="leftHomeAboutUs col-md mt-5">
          <div className="leftHomeAboutUsInfo">
            <h3>Quienes somos:</h3>
            <p>Somos una academia de capacitación constituida en el año 2000 que tiene por objeto social proveer enseñanza, capacitación, entrenamiento y actualización de conocimientos relacionados con Vigilancia y Seguridad Privada en sus diferentes áreas...</p>
            <button>Conocer más</button>
          </div>
          <div className="circleLeftHomeAboutUs1"></div>
          <div className="circleLeftHomeAboutUs2"></div>
          <div className="circleLeftHomeAboutUs3"></div>
          <div className="circleLeftHomeAboutUs4"></div>
          <div className="circleLeftHomeAboutUs5"></div>
          <div className="circleLeftHomeAboutUs6"></div>
        </div>
        <div className="rigthHomeAboutUs col-md mt-5">
          <img src={imagen} alt="about us" />
        </div>
      </div>
    </div>
  );
};

export { HomeAboutUs };