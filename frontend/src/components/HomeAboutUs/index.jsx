import React from "react";
import "./HomeAboutUs.css";
import backgroundImage from "../../assets/contact/back.jpeg";
import logo from "../../assets/Logo COGNOSEGURIDAD.png";

const HomeAboutUs = ({ showModal }) => {

  const handleButtonClick = () => {
    const content = 
    <div className="about-container-modal m-4" id="aboutUs">
      <h2>QUIENES SOMOS</h2>
      <div className="about-content-text">
        <p>Somos una academia de capacitación constituida en el año 2000 que tiene por objeto social proveer enseñanza, capacitación, entrenamiento y actualización de conocimientos relacionados con Vigilancia y Seguridad Privada en sus diferentes áreas.</p>
        <p>Contamos con un modelo pedagógico construido y desarrollado a partir de la “FORMACIÓN DE COMPETENCIAS LABORALES (comprende lo funcional y conductual) e integra productos de la mesa sectorial como normas de competencia laboral para tal propósito.</p>
        <p>Tenemos un cubrimiento nacional con agencias autorizadas por la Supervigilancia en las ciudades de Bogotá, Bucaramanga, Cúcuta, Santa Rosa de Cabal, Villavicencio y Tocancipá, promoviendo todo un proceso de estrategias modernas de capacitación. Contamos con dos galardones internacionales a la calidad, otorgado por QUALITY SUMMIT, New York 2012 & ESQR'S Quality Achivements Award Londres 2013</p>
      </div>
      <img src={logo} alt="quienes somos emergente" />
    </div>;
    showModal(content);
  };

  return (
    <div className="bodyHomeAboutUs" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="contentHomeAboutUs row g-2 w-100 p-5">
        <div className="leftHomeAboutUs col-md mt-5">
          <div className="leftHomeAboutUsInfo">
            <h3>Quienes somos:</h3>
            <p>Somos una academia de capacitación constituida en el año 2000 que tiene por objeto social proveer enseñanza, capacitación, entrenamiento y actualización de conocimientos relacionados con Vigilancia y Seguridad Privada en sus diferentes áreas...</p>
            <button onClick={handleButtonClick}>Conocer más</button>
          </div>
        </div>
        <div className="rigthHomeAboutUs col-md mt-5">
        </div>
      </div>
    </div>
  );
};

export { HomeAboutUs };