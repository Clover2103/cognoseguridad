import React, { useState } from "react";
import './ConsultationCertificate.css';

const ConsultationCertificate = () => {

  return (
    <div className=" certificate-body mb-5">
      <iframe 
        src="https://cognoseguridad.com/consultasNro/consulta.php" 
        width="100%" 
        height="400" 
        frameborder="0" 
        marginheight="0" 
        className="m-0"></iframe>
    </div>
  );
};

export { ConsultationCertificate };