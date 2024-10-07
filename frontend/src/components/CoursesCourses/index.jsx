import React from "react";
import { CoursesCard } from "../CoursesCard";
import "./CoursesCourses.css";

import image1 from '../../assets/courses/vigilante.png';
import image2 from '../../assets/courses/supervisor.png';
import image3 from '../../assets/courses/escolta.png';
import image4 from '../../assets/courses/operador-de-medios.png';
import image5 from '../../assets/courses/cordinador.png';

const courses = [
  { 
    src: image1, 
    title: 'Vigilante de seguridad', 
    description: 'Capacitar a las personas que desean desempeñarse como vigilantes. Incluye formación en temas como derechos humanos, primeros auxilios, manejo de armas, normatividad, y técnicas de seguridad básica.', 
    direction: 'direction1',
    ciclos: {
      ciclo1: {
        title: 'Fundamentación en Vigilancia',
        description: 'La Fundamentación en Vigilancia es el primer paso para formar a quienes desean desempeñarse en el campo de la seguridad privada. Este ciclo, con una duración de 100 horas, brinda los conocimientos básicos en normativas, manejo de situaciones críticas y procedimientos de seguridad, preparando a los aspirantes para actuar con profesionalismo y responsabilidad. Con una sólida formación teórica y práctica, los futuros vigilantes estarán capacitados para proteger bienes, personas e instalaciones, siempre respetando los derechos humanos y actuando de acuerdo a la ley.'
      },
      ciclo2: {
        title: 'Reentrenamiento en Vigilancia',
        description: 'El Reentrenamiento en Vigilancia está diseñado para reforzar y actualizar los conocimientos y habilidades de los vigilantes en ejercicio. Este ciclo de 30 horas es fundamental para garantizar que los profesionales del sector estén al día con las últimas normativas, tecnologías y estrategias en seguridad privada. A través de simulaciones y prácticas avanzadas, los vigilantes renuevan su capacidad de respuesta ante emergencias y su compromiso con la excelencia en el servicio de protección.'
      },
      ciclo3: {
        title: 'Especialización en Vigilancia',
        description: 'La Especialización en Vigilancia es un ciclo avanzado de 60 horas que permite a los vigilantes profundizar en áreas específicas de la seguridad privada. Aquí, los profesionales adquieren competencias en el manejo de situaciones de alto riesgo, operaciones tácticas y gestión avanzada de seguridad. Esta especialización busca dotar a los vigilantes de herramientas especializadas que les permitan enfrentar retos complejos y elevar sus capacidades para desempeñar un rol estratégico dentro de las organizaciones.'
      },
      ciclo4: {
        title: 'Profundización en Vigilancia',
        description: 'La Profundización en Vigilancia es un ciclo formativo de 30 horas, diseñado para aquellos vigilantes que buscan perfeccionar sus competencias y ampliar su conocimiento en seguridad privada. Este programa permite a los profesionales adentrarse en aspectos críticos de la vigilancia, como la evaluación de riesgos, la planificación de operaciones y el liderazgo en equipos de seguridad. Con esta formación, los vigilantes desarrollan una visión más integral y estratégica, listos para enfrentar desafíos más exigentes en su rol.'
      }
    }
  },
  { 
    src: image2, 
    title: 'Supervidor de seguridad', 
    description: 'Formar a los vigilantes que deseen ascender a cargos de supervisión. Este curso enseña habilidades de liderazgo, coordinación de equipos de seguridad, y toma de decisiones en situaciones de riesgo.', 
    direction: 'direction2',
    ciclos: {
      ciclo1: {
        title: 'Fundamentación en Supervisión de Vigilancia',
        description: 'La Fundamentación en Supervisión de Vigilancia es el punto de partida para aquellos que buscan dirigir equipos de seguridad privada. Con una duración de 100 horas, este ciclo proporciona las bases necesarias para gestionar, coordinar y supervisar las operaciones de vigilancia, asegurando el cumplimiento de los protocolos y la normatividad vigente. Los supervisores formados en este ciclo estarán capacitados para liderar equipos, garantizar un entorno seguro y eficiente, y tomar decisiones clave en situaciones de riesgo.'
      },
      ciclo2: {
        title: 'Reentrenamiento en Supervisión de Vigilancia',
        description: 'El Reentrenamiento en Supervisión de Vigilancia, con una duración de 30 horas, está diseñado para actualizar y reforzar las habilidades de supervisores en ejercicio. Este ciclo se enfoca en las últimas normativas, técnicas de liderazgo y gestión de equipos de seguridad. A través de casos prácticos y simulaciones, los supervisores renuevan sus conocimientos y fortalecen su capacidad para supervisar operaciones, manejar conflictos y garantizar un control efectivo de las actividades de seguridad privada.'
      },
      ciclo3: {
        title: 'Especialización en Supervisión de Vigilancia',
        description: 'La Especialización en Supervisión de Vigilancia, con una duración de 60 horas, ofrece a los supervisores una formación avanzada en estrategias de control y manejo de equipos de seguridad en entornos de alto riesgo. Este ciclo se centra en el desarrollo de competencias clave como la planificación de operativos, la evaluación de amenazas y la toma de decisiones bajo presión. Los supervisores especializados estarán preparados para enfrentar desafíos complejos y garantizar el funcionamiento óptimo de las operaciones de seguridad.'
      },
      ciclo4: {
        title: 'Profundización en Supervisión de Vigilancia',
        description: 'La Profundización en Supervisión de Vigilancia, con una duración de 30 horas, está enfocada en perfeccionar las habilidades de supervisión y gestión operativa. Este ciclo permite a los supervisores desarrollar una visión más estratégica y amplia de la seguridad privada, con énfasis en la gestión de recursos, la eficiencia operativa y el liderazgo de equipos multidisciplinarios. Los supervisores formados en este ciclo estarán equipados para implementar mejoras continuas y asegurar altos estándares de seguridad.'
      }
    }
  },
  { 
    src: image3, 
    title: 'Escolta de seguridad', 
    description: 'Formación especializada para quienes deseen trabajar como escoltas de personas. El curso incluye entrenamiento en protección personal, técnicas de defensa, y conducción defensiva.', 
    direction: 'direction1',
    ciclos: {
      ciclo1: {
        title: 'Fundamentación en Escolta de Seguridad',
        description: 'La Fundamentación en Escolta de Seguridad es el primer paso esencial para quienes buscan proteger de manera profesional a personas bajo situaciones de riesgo. Con una duración de 100 horas, este ciclo está orientado a formar escoltas capacitados en técnicas de protección personal, manejo de riesgos y procedimientos de seguridad avanzada. Los participantes desarrollan las habilidades necesarias para garantizar la seguridad de individuos en tránsito o en situaciones críticas, asegurando un entorno seguro y controlado en todo momento.'
      },
      ciclo2: {
        title: 'Reentrenamiento en Escolta de Seguridad',
        description: 'El Reentrenamiento en Escolta de Seguridad, con una duración de 30 horas, tiene como objetivo mantener actualizados a los escoltas en activo sobre las últimas técnicas de protección personal, el manejo de nuevas amenazas y el uso de herramientas modernas en seguridad. A través de simulaciones intensivas y situaciones de riesgo controlado, los escoltas refuerzan sus competencias para reaccionar de manera efectiva ante potenciales amenazas y garantizar la seguridad de sus protegidos en diferentes escenarios.'
      },
      ciclo3: {
        title: 'Especialización en Escolta de Seguridad',
        description: 'La Especialización en Escolta de Seguridad, con una duración de 60 horas, proporciona formación avanzada para escoltas que buscan especializarse en la protección de individuos en entornos de alto riesgo. Este ciclo está diseñado para desarrollar habilidades tácticas, análisis de amenazas y estrategias de evasión y defensa personal. Los escoltas especializados podrán operar en situaciones de riesgo elevado, asegurando la protección de personas clave, con un enfoque en la prevención y mitigación de peligros.'
      },
      ciclo4: {
        title: 'Profundización en Escolta de Seguridad',
        description: 'La Profundización en Escolta de Seguridad, con una duración de 30 horas, está orientada a escoltas experimentados que buscan perfeccionar sus técnicas y ampliar sus conocimientos en el manejo de situaciones críticas. Este ciclo se enfoca en la toma de decisiones bajo presión, la planificación de rutas seguras y la gestión de emergencias, ofreciendo una formación integral para garantizar la seguridad de sus protegidos en entornos complejos y cambiantes.'
      }
    }
  },
  { 
    src: image4, 
    title: 'Operador de medios tecnologicos', 
    description: 'Formar a los participantes en la operación y monitoreo de dispositivos tecnológicos utilizados en la seguridad privada. El curso abarca la instalación, manejo y supervisión de herramientas tecnológicas como: 1) Circuito cerrado de televisión (CCTV). 2) Sistemas de alarmas. 3) Controles de acceso electrónico. 4) Equipos de detección de incendios. 5) Software de seguridad y análisis de video.', 
    direction: 'direction2',
    ciclos: {
      ciclo1: {
        title: 'Fundamentación en Medios Tecnológicos de Seguridad',
        description: 'La Fundamentación en Medios Tecnológicos de Seguridad es el pilar inicial para aquellos interesados en la operación y manejo de tecnologías aplicadas a la seguridad. Con una duración de 100 horas, este ciclo proporciona los conocimientos necesarios sobre sistemas de videovigilancia, alarmas, control de accesos y otras tecnologías clave para la protección de instalaciones y personas. Los participantes aprenderán a operar de manera eficiente estos sistemas, comprendiendo tanto su funcionamiento técnico como su rol dentro de una estrategia integral de seguridad.'
      },
      ciclo2: {
        title: 'Reentrenamiento en Medios Tecnológicos de Seguridad',
        description: 'El Reentrenamiento en Medios Tecnológicos de Seguridad, con una duración de 30 horas, está diseñado para mantener actualizados a los operadores de sistemas de seguridad tecnológica. Este ciclo se centra en las nuevas tecnologías emergentes, actualizaciones de software y mejores prácticas en la gestión de medios tecnológicos. Los participantes renovarán sus conocimientos en sistemas de monitoreo y alarmas, garantizando que las operaciones se mantengan a la vanguardia tecnológica y ofrezcan el mayor nivel de protección.'
      },
      ciclo3: {
        title: 'Especialización en Medios Tecnológicos de Seguridad',
        description: 'La Especialización en Medios Tecnológicos de Seguridad, con una duración de 60 horas, se enfoca en el manejo avanzado y la integración de sistemas de seguridad tecnológica complejos. Este ciclo capacita a los participantes en el análisis de datos de videovigilancia, la gestión de redes de seguridad y la configuración avanzada de sistemas de control de acceso y alarmas. La especialización permite a los profesionales implementar soluciones tecnológicas más robustas y estratégicas, capaces de enfrentar riesgos crecientes y proteger de manera integral infraestructuras críticas.'
      },
      ciclo4: {
        title: 'Profundización en Medios Tecnológicos de Seguridad',
        description: 'La Profundización en Medios Tecnológicos de Seguridad, con una duración de 30 horas, está diseñada para operadores experimentados que buscan perfeccionar sus habilidades en la gestión de sistemas tecnológicos avanzados. Este ciclo aborda la optimización de sistemas de seguridad, la resolución de problemas técnicos complejos y la implementación de mejoras continuas en el monitoreo y control de accesos. Los participantes desarrollarán una visión integral que les permitirá elevar la eficiencia operativa y garantizar la protección máxima mediante medios tecnológicos.'
      }
    } 
  },
  { 
    src: image5, 
    title: 'Coordinador', 
    description: 'Dirigido a quienes desean desempeñar funciones de coordinación y gestión dentro de una empresa de seguridad. Este curso incluye formación en administración de recursos humanos, análisis de riesgos, y planificación estratégica.', 
    direction: 'direction1',
    ciclos: {
      ciclo1: {
        title: 'Coordinadores y directivos seminarios',
        description: 'Este programa está diseñado para profesionales que buscan liderar y gestionar equipos dentro del ámbito de la seguridad privada. A lo largo del seminario, se exploran las mejores prácticas en supervisión operativa, toma de decisiones estratégicas y manejo eficiente de recursos. Además, los participantes desarrollarán competencias clave en la gestión integral de riesgos, optimización de procesos y liderazgo efectivo, preparándolos para asumir roles de alta responsabilidad dentro de una organización de seguridad.'
      }
    }
  },
]

const CoursesCourses = ({ showModal }) => {

  return (
    <div className="bodyCoursesCourses container mb-5">
      {courses.map((course, index) => (
        <CoursesCard
          key={index}
          src={course.src}
          title={course.title}
          description={course.description}
          direction={course.direction}
          ciclos={course.ciclos}
          showModal={showModal}
        />
      ))}
    </div>
  );
};

export { CoursesCourses };