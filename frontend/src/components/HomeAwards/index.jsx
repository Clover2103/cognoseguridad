import React from "react";
import './HomeAwards.css';
import awards2012 from '../../assets/home/awards/2012.jpg';
import awards2013 from '../../assets/home/awards/2013.jpg';

const HomeAwards = () => {
  return(
    <div className="bodyHomeAwards">
      <h2>NUESTROS PREMIOS</h2>
      <div className="container">
        <div className="row g-2">
          <div className="col-md awards2012">
            <img src={awards2012} alt="Premio 2012" />
            <p className="mt-3">Golden Award For Excelllence and Business Prestige</p>
            <p>New York 2012</p>
          </div>
          <div className="col-md awards2013">
            <img src={awards2013} alt="Premio 2013" />
            <p className="mt-3">SQR'S Quality Achivements Award</p>
            <p>Londres 2013</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeAwards };