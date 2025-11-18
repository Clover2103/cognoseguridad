import React from "react";
import image1 from "../../assets/sedes/bogota.jpeg";
import image2 from "../../assets/sedes/cucuta.jpeg";
import image3 from "../../assets/sedes/villavicencio.jpeg";
import image4 from "../../assets/sedes/bucaramanga.jpeg";
import image5 from "../../assets/sedes/santarosa.jpg";
import image6 from "../../assets/sedes/tocancipa.jpg";
import { useCarrucel } from "../../hooks/useCarrucel";
import "./ConsultationSedes.css";

const images = [image1, image2, image3, image4, image5, image6];

const sedesInfo = [
  {
    text: "Bogotá - Sede Principal",
    whatsapp: "https://api.whatsapp.com/send?phone=573105610135",
    maps: "https://www.google.com/maps/place/Academia+Cognoseguridad+Ltda./data=!4m2!3m1!1s0x0:0xb91454118c0ce402?sa=X&ved=1t:2428&ictx=111",
  },
  {
    text: "Cúcuta",
    whatsapp: "https://api.whatsapp.com/send?phone=573105610135",
    maps: "https://www.google.com/maps/place/Academia+Cognoseguridad+Ltda.+Agencia+C%C3%BAcuta/@7.8936464,-72.4987335,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6645737d2309c7:0x8adcf0120eec0965!8m2!3d7.8936464!4d-72.4987335!16s%2Fg%2F11c2k39gfn?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    text: "Villavicencio",
    whatsapp: "https://api.whatsapp.com/send?phone=573103466926",
    maps: "https://www.google.com/maps/place/Academia+Cognoseguridad+Ltda.+Agencia+Villavicencio/data=!4m2!3m1!1s0x0:0x7bca00f39807b209?sa=X&ved=1t:2428&ictx=111",
  },
  {
    text: "Bucaramanga",
    whatsapp: "https://api.whatsapp.com/send?phone=573204610067",
    maps: "https://www.google.com/maps/place/Academia+de+Vigilancia+Cognoseguridad+Bucaramanga/@7.117897,-73.124168,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6815d5bbfab617:0x13c36a19a3fc669d!8m2!3d7.117897!4d-73.124168!16s%2Fg%2F11fs331klx?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    text: "Santa Rosa de Cabal",
    whatsapp: "https://api.whatsapp.com/send/?phone=573112623681&tex&type=phone_number&app_absent=0",
    maps: "https://www.google.com/maps/search/?api=1&query=4.8745,-75.6228",
  },
  {
    text: "Tocancipa",
    whatsapp: "https://api.whatsapp.com/send/?phone=573103371677&text&type=phone_number&app_absent=0",
    maps: "https://www.google.com/maps/place/4%C2%B057'51.6%22N+73%C2%B054'54.8%22W/@4.9643386,-73.9177971,17z/data=!3m1!4b1!4m4!3m3!8m2!3d4.9643333!4d-73.9152222?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
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