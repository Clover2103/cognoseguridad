import React from "react";
import "./ConsultationSedes.css";
import image1 from "../../assets/sedes/bogota.jpeg";
import image2 from "../../assets/sedes/bogota.jpeg";
import image3 from "../../assets/sedes/bogota.jpeg";
import image4 from "../../assets/sedes/bogota.jpeg";
import image5 from "../../assets/sedes/bogota.jpeg";
import image6 from "../../assets/sedes/bogota.jpeg";
import { useCarrucel } from "../../hooks/useCarrucel";

const images = [image1, image2, image3, image4, image5, image6];

const ConsultationSedes = () => {

  const {
    currentIndex,
    sliderRef,
    scrollLeft,
    scrollRight,
    goToIndex,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarrucel(images.length, false, 5000);

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
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
            ></span>
          ))}
        </div>

        <div className="slider-deg">
            
        </div>
      </div>
    </div>
  );
};

export { ConsultationSedes };