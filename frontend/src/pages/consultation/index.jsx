import React, { useState } from "react";
import { ConsultationSelect } from "../../components/ConsultationSelect";
import { ConsultationCertificate } from "../../components/ConsultationCertificate";
import { ConsultationPromotions } from "../../components/ConsultationPromotions";
import { ConsultationPolygon } from "../../components/ConsultationPolygon";
import { ConsultationSedes } from "../../components/ConsultationSedes";
import "./consultation.css"


const Consultation = () => {

  const [selectedOption, setSelectedOption] = useState('certificado');

  const handleSelectChange = (value) => {
    console.log(value);
    setSelectedOption(value);
  };


  return (
    <div>
      <ConsultationSelect onSelectChange={handleSelectChange}/>

      <div className={`certificado-content ${selectedOption === 'certificado' ? 'visible' : 'hidden'}`}>
        <ConsultationCertificate />
      </div>
      <div className={`promociones-content ${selectedOption === 'promociones' ? 'visible' : 'hidden'}`}>
        <ConsultationPromotions />
      </div>
      <div className={`poligono-content ${selectedOption === 'poligono' ? 'visible' : 'hidden'}`}>
        <ConsultationPolygon />
      </div>
      <div className={`sedes-content ${selectedOption === 'sedes' ? 'visible' : 'hidden'}`}>
        <ConsultationSedes />
      </div>
    </div>
  );
};

export { Consultation };