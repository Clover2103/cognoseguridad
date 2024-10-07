import React from "react";
import image1 from "../../assets/sedes/bogota.jpeg";
import image2 from "../../assets/sedes/cucuta.jpeg";
import image3 from "../../assets/sedes/villavicencio.jpeg";
import image4 from "../../assets/sedes/bucaramanga.jpeg";
import image5 from "../../assets/sedes/bogota.jpeg";
import image6 from "../../assets/sedes/bogota.jpeg";
import { useCarrucel } from "../../hooks/useCarrucel";
import "./ConsultationSedes.css";

const images = [image1, image2, image3, image4, image5, image6];

const sedesInfo = [
  {
    text: "Bogotá - Sede Principal",
    whatsapp: "https://wa.link/a2j3c0",
    maps: "https://maps.app.goo.gl/4mYTDLB5eiyxED3A6",
  },
  {
    text: "Cúcuta",
    whatsapp: "https://wa.link/ipneag",
    maps: "https://maps.app.goo.gl/wbPgrCpiGiod12rRA",
  },
  {
    text: "Villavicencio",
    whatsapp: "https://wa.link/3lbjo2",
    maps: "https://maps.app.goo.gl/ZbPGXgYYsrWLpVdv9",
  },
  {
    text: "Bucaramanga",
    whatsapp: "https://wa.link/l6af50",
    maps: "https://maps.app.goo.gl/C1NgPJYpZ7WLLHnD6",
  },
  {
    text: "Santa Rosa de Cabal",
    whatsapp: "https://wa.link/x1c2ii",
    maps: "https://maps.app.goo.gl/8vgXYQmkgT7ocUAx9",
  },
  {
    text: "Tocancipa",
    whatsapp: "",
    maps: "",
  },
];

const ConsultationSedes = () => {

  const {
    currentIndex,
    sliderRef,
    scrollLeft,
    scrollRight,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarrucel(images.length, false, 5000);

  const currentSede = sedesInfo[currentIndex];

  return (
    <div className="bodyConsultationSedes">
      <div className="homeSlider"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="cont-slider">
          <button className="nav-btn prev-btn" onClick={scrollLeft}>&#10094;</button>
          <div className="slider" ref={sliderRef}>
            {images.map((img, index) => {
              let className = 'slider-img';
              if (index === currentIndex) {
                className += ' focus';
              } 
              else if (index === (currentIndex - 1 + images.length) % images.length) {
                className += ' left';
              } else if (index === (currentIndex + 1) % images.length) {
                className += ' right';
              }
              return (
                <div className={className} key={index}>
                  <img src={img} alt={`img-slider-${index + 1}`} />
                </div>
              );
            })}
          </div>
          <button className="nav-btn next-btn" onClick={scrollRight}>&#10095;</button>
        </div>

        {/* Contenedor flotante con información dinámica */}
        <div className="info-container">
          <h2>{currentSede.text}</h2>
          <div className="info-btns">
            <a
              href={currentSede.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Contactar
            </a>
            <a
              href={currentSede.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-btn"
            >
              Ubicación
            </a>
          </div>
        </div>

        <div className="slider-deg">
            
        </div>
      </div>
    </div>
  );
};

export { ConsultationSedes };