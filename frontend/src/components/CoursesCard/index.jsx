import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import "./CoursesCard.css";

const CoursesCard = ({ src, title, description, direction, ciclos, showModal }) => {

  const handleShowModal = () => {
    // Generar el acordeón dinámicamente para los ciclos
    const content = (
      <div className="content-accordion">
        <h1 className="modal-title-card">{title}</h1>
        <p>{description}</p>
        <div className="cont-accordion">
          <div className="accordion" id="accordionExample">
            {Object.keys(ciclos).map((key, index) => {
              const ciclo = ciclos[key];
              const targetId = `collapse${index}`;
              const headingId = `heading${index}`;
              
              return (
                <div className="accordion-item" key={key}>
                  <h2 className="accordion-header" id={headingId}>
                    <button
                      className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${targetId}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={targetId}
                    >
                      {ciclo.title}
                    </button>
                  </h2>
                  <div
                    id={targetId}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={headingId}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {ciclo.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <a href="https://wa.link/d7k5lc" target="_blank" rel="noreferrer">
          <button className="btn btn-primary w-100">CONSULTARNOS MÁS INFORMACIÓN <FaWhatsapp /></button>
        </a>
      </div>
    );
    showModal(content);
  };

  return (
    <div className="bodyCoursesCard mt-2 mb-2">
      <div className={direction + " row g-2"}>
        <div className={direction + "card-image col-md"}>
          <img src={src} alt={title} />
        </div>
        <div className="card-content col-md">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <button className="card-button" onClick={handleShowModal}>
            Ver más <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export { CoursesCard };
