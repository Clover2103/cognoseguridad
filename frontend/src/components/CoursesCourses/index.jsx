import React from "react";
import { CoursesCard } from "../CoursesCard";
import "./CoursesCourses.css";

import image1 from '../../assets/courses/vigilante.png';
import image2 from '../../assets/courses/supervisor.png';
import image3 from '../../assets/courses/escolta.png';
import image4 from '../../assets/courses/operador-de-medios.png';
import image5 from '../../assets/courses/cordinador.png';

const courses = [
  { src: image1, title: 'Vigilante de seguridad', description: 'Capacitar a las personas que desean desempeñarse como vigilantes. Incluye formación en temas como derechos humanos, primeros auxilios, manejo de armas, normatividad, y técnicas de seguridad básica.', direction: 'direction1' },
  { src: image2, title: 'Supervidor de seguridad', description: 'Formar a los vigilantes que deseen ascender a cargos de supervisión. Este curso enseña habilidades de liderazgo, coordinación de equipos de seguridad, y toma de decisiones en situaciones de riesgo.', direction: 'direction2' },
  { src: image3, title: 'Escolta de seguridad', description: 'Formación especializada para quienes deseen trabajar como escoltas de personas. El curso incluye entrenamiento en protección personal, técnicas de defensa, y conducción defensiva.', direction: 'direction1' },
  { src: image4, title: 'Operador de medios tecnologicos', description: 'Formar a los participantes en la operación y monitoreo de dispositivos tecnológicos utilizados en la seguridad privada. El curso abarca la instalación, manejo y supervisión de herramientas tecnológicas como: 1) Circuito cerrado de televisión (CCTV). 2) Sistemas de alarmas. 3) Controles de acceso electrónico. 4) Equipos de detección de incendios. 5) Software de seguridad y análisis de video.', direction: 'direction2' },
  { src: image5, title: 'Coordinador', description: 'Dirigido a quienes desean desempeñar funciones de coordinación y gestión dentro de una empresa de seguridad. Este curso incluye formación en administración de recursos humanos, análisis de riesgos, y planificación estratégica.', direction: 'direction1' },
]

const CoursesCourses = () => {

  return (
    <div className="bodyCoursesCourses container mb-5">
      {courses.map((course, index) => (
        <CoursesCard
          key={index}
          src={course.src}
          title={course.title}
          description={course.description}
          direction={course.direction}
        />
      ))}
    </div>
  );
};

export { CoursesCourses };