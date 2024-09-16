import React from "react";
import { GoArrowRight } from "react-icons/go";
import "./CoursesCard.css";

const CoursesCard = ({ src, title, description, direction }) => {
  return (
    <div className="bodyCoursesCard mt-2 mb-2">
      <div className={direction + " row g-2"}>
        <div className={direction +"card-image col-md"}>
          <img src={src} alt={title} />
        </div>
        <div className="card-content col-md">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <button className="card-button">Ver más <GoArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export { CoursesCard };