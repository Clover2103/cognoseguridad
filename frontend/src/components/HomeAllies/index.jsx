import React from 'react';
import { useCarrucel } from '../../hooks/useCarrucel';
// import { useVisibility } from "../../hooks/useVisibility";
import aiexsst from "../../assets/home/allies/logo-aiexsst.png";
import clubtiro from "../../assets/home/allies/logo-clubdetiro.png";
import aiexocp from "../../assets/home/allies/logo-aiexocp.png";
import conasegur from "../../assets/home/allies/logo-conasegur.png";
import funhumac from "../../assets/home/allies/logo-funhumac.png";
import vialseguridad from "../../assets/home/allies/logo-vialseguridad.png";
import vigiempleo from "../../assets/home/allies/logo-vigiempleo.png";
import "./HomeAllies.css";

const alliesData = [
  { src: aiexsst, alt: "aiex sst", url: "https://aiex.co/", desc: "Contamos con la licencia para la prestacion de los servicios de seguridad y salud en el trabajo, concedida por el Ministerio de Salud y ..." },
  { src: clubtiro, alt: "clubtiro", url: "https://clubdetiroconasegur.com/", desc: "Fomenta el respeto, la sana convivencia, el juego limpio y el espíritu de competencia para el personal de Seguridad Privada..." },
  { src: aiexocp, alt: "aiexocp", url: "https://aiex.com.co/", desc: "CERTIFICACIÓN DE PERSONAS AIEX S.A.S. es un Organismo de Evaluación de la Conformidad acreditado bajo la Norma ISO/IEC 17024:2012 de naturaleza privada y alto sentido de responsabilidad ..." },
  { src: conasegur, alt: "conasegur", url: "https://conasegur.org/", desc: "Somos la Corporación Nacional de Empresas de Seguridad Privada 'CONASEGUR', gremio del sector de la Vigilancia y Seguridad Privada, con cubrimiento a nivel Nacional..." },
  { src: funhumac, alt: "funhumac", url: "https://funhumac.org/", desc: "La Fundación Humana - Mujer Activa, es una organización que fomenta, fortalece y facilita el mejoramiento de la calidad de vida de las personas,..." },
  { src: vialseguridad, alt: "vialseguridad", url: "https://vialseguridad.com/", desc: "Somos una empresa de Seguridad Privada que cuenta con autorización SuperVigilancia Res. 20224100050807 de  05-08-2022, con un alto..." },
  { src: vigiempleo, alt: "vigiempleo", url: "https://vigiempleo.com/pages/", desc: "Esta plataforma tecnológica permite de forma oportuna y eficiente la solución de las necesidades laborales del talento humano tanto empresariales como personales..." }
];

const HomeAllies = () => {
  const { 
    currentIndex,
    sliderRef, 
    scrollUp, 
    scrollDown,
  } = useCarrucel(alliesData.length, false, 3000);
  // const imgRef = useVisibility();

  const getVisibleSlides = () => {
    return alliesData.map((data, index) => {
      let className = 'carrucelImg';
      
      if (index === currentIndex) {
        className += ' focus'; // Elemento en el centro
      } else if (index === (currentIndex - 1 + alliesData.length) % alliesData.length) {
        className += ' left'; // Elemento a la izquierda
      } else if (index === (currentIndex + 1) % alliesData.length) {
        className += ' right'; // Elemento a la derecha
      }

      return (
        <div className={className} key={index}>
          <figure>
            <img src={data.src} alt={data.alt} />
            <div className="alliesInfo">
              <p>{data.desc}</p>
              <a href={data.url} target="_blank" rel="noreferrer">
                <button className="btn-allies">CONOCER MÁS</button>
              </a>
            </div>
          </figure>
        </div>
      );
    });
  };

  return (
    <div className='bodyHomeAllies'>
        <div className="carrucelAllies container">
          <button className="nav-btn prev-btn" onClick={scrollUp}>&#10094;</button>
          <div className="carrucel" ref={sliderRef} style={{ transform: `translateY(-${currentIndex})` }}>
            {getVisibleSlides()} {/* Renderiza las diapositivas visibles con las clases adecuadas */}
          </div>
          <button className="nav-btn next-btn" onClick={scrollDown}>&#10095;</button>
        </div>
        {/* <div className="carrucel-deg">
          
        </div> */}

    </div>
  );
};

export { HomeAllies };
