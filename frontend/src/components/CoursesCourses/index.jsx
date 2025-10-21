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
    title: 'Fundamentación modulo basico enfasis vigilante',
    description: 'Capacitar a las personas que desean desempeñarse como vigilantes. Incluye formación en temas como derechos humanos, primeros auxilios, manejo de armas, normatividad, y técnicas de seguridad básica.', 
    direction: 'direction1',
    ciclos: {
      ciclo1: {
        title: 'Fundamentación modulo basico enfasis vigilante (120 horas)',
        description: 'La Fundamentación es el ciclo inicial y obligatorio (120 Horas) que dota al aspirante de las competencias básicas en normatividad vigente, procedimientos de seguridad, primeros auxilios, control de situaciones, y manejo básico de armas para desempeñarse profesionalmente como vigilante.'
      },
      ciclo2: {
        title: 'Reentrenamiento basico (30 horas)',
        description: 'Programa de actualización obligatoria (30 Horas) para vigilantes en servicio. Se enfoca en el refuerzo de procedimientos, la revisión de la normatividad legal más reciente y el perfeccionamiento de las técnicas operacionales y de manejo de armas.'
      },
      ciclo3: {
        title: 'Reentrenamiento electivo (30 horas)',
        description: 'Capacitación electiva de 30 horas enfocada en temas sectoriales según el servicio: Aeroportuario, Financiero, Comercial, Educativo, Eventos Públicos, Residencial, Petrolero, Turístico, Minero, Transporte Masivo, etc. Permite la especialización del servicio.'
      },
      ciclo4: {
        title: 'Reentrenamiento electivo especialización en Vigilancia (80 horas)',
        description: 'Ciclo avanzado de 80 horas para profundizar en áreas de alta complejidad y riesgo, según lo establecido por la SuperVigilancia (ej. Portuaria, Minera, Vigilancia de Establecimientos de Detección Preventiva y Carcelarios). Desarrolla competencias tácticas específicas.'
      },
      ciclo5: {
        title: 'Profundización en Vigilancia (30 horas)',
        description: 'Módulo de 30 horas que busca el perfeccionamiento de las habilidades adquiridas en la especialización, enfocándose en la evaluación de riesgos, planeación de operaciones y el liderazgo en equipos de seguridad en entornos exigentes.'
      }
    }
  },
  { 
    src: image2, 
    title: 'Fundamentación modulo basico enfasis supervisor',
    description: 'Formar a los vigilantes que deseen ascender a cargos de supervisión. Este curso enseña habilidades de liderazgo, coordinación de equipos de seguridad, y toma de decisiones en situaciones de riesgo.', 
    direction: 'direction2',
    ciclos: {
      ciclo1: {
        title: 'Fundamentación modulo basico enfasis supervisor (120 horas)',
        description: 'Programa inicial de 120 horas para supervisores. Cubre la gestión operativa, la coordinación de puestos de vigilancia, el liderazgo de equipos, la toma de decisiones críticas y el aseguramiento del cumplimiento normativo en los servicios de seguridad privada.'
      },
      ciclo2: {
        title: 'Reentrenamiento basico (30 horas)',
        description: 'Actualización obligatoria (30 Horas) para supervisores en ejercicio. Se centra en el refuerzo de las habilidades de liderazgo, las últimas normativas de seguridad privada, la gestión de conflictos y las técnicas de manejo de personal a cargo.'
      },
      ciclo3: {
        title: 'Reentrenamiento electivo (30 horas)',
        description: 'Capacitación electiva de 30 horas enfocada en la supervisión de sectores específicos: Aeroportuario, Comercial, Educativo, Financiero, Eventos Públicos, Transporte Masivo, Portuario, Minero y demás unidades residenciales e industriales.'
      },
      ciclo4: {
        title: 'Reentrenamiento electivo especialización en Supervisión de Vigilancia (80 horas)',
        description: 'Ciclo de 80 horas que prepara al supervisor para el control de riesgos en escenarios complejos y específicos, tales como: Portuaria, Minera, Servicios Financieros, establecimientos de Detección Preventiva y Centros Carcelarios.'
      },
      ciclo5: {
        title: 'Profundización en Supervisión de Vigilancia (30 horas)',
        description: 'Módulo de 30 horas para el perfeccionamiento de competencias gerenciales y estratégicas en supervisión, incluyendo auditoría, control de gestión, y optimización de los recursos y procesos de seguridad.'
      }
    }
  },
  { 
    src: image3, 
    title: 'Fundamentación modulo basico enfasis escolta', 
    description: 'Formación especializada para quienes deseen trabajar como escoltas de personas y mercancías de alto valor. El curso incluye entrenamiento en protección personal, técnicas de defensa y reacción, y conducción defensiva y evasiva.', 
    direction: 'direction1',
    ciclos: {
      ciclo1: {
        title: 'Fundamentación modulo basico enfasis escolta (120 horas)',
        description: 'Programa inicial de 120 horas. Forma al personal en la protección de individuos (esquemas de seguridad), reacción ante ataques, manejo defensivo y evasivo, y el uso y porte legal de armas en el servicio de escolta.'
      },
      ciclo2: {
        title: 'Reentrenamiento basico (30 horas)',
        description: 'Actualización obligatoria (30 Horas). Refuerza los protocolos de seguridad, las técnicas de defensa personal y la capacidad de respuesta inmediata y táctica ante situaciones de riesgo para el protegido o el bien escoltado.'
      },
      ciclo3: {
        title: 'Reentrenamiento electivo (30 horas)',
        description: 'Capacitación electiva de 30 horas enfocada en el manejo defensivo, protección en tránsito y el transporte de valores, incluyendo estrategias de protección en ruta y procedimientos logísticos de seguridad.'
      },
      ciclo4: {
        title: 'Reentrenamiento electivo especialización en Escolta de Seguridad (80 horas)',
        description: 'Ciclo de 80 horas que profundiza en: Protección a Dignatarios (planes de avanzada y protocolos especializados), Protección a Personas Amenazadas y Transporte de Valores. Proporciona herramientas tácticas avanzadas.'
      },
      ciclo5: {
        title: 'Profundización en Escolta de Seguridad (30 horas)',
        description: 'Módulo de 30 horas que perfecciona las técnicas tácticas y de análisis de riesgos en la protección, con énfasis en la planeación y ejecución de misiones de seguridad complejas y la toma de decisiones bajo presión.'
      }
    }
  },
  { 
    src: image4, 
    title: 'Fundamentación modulo basico enfasis OMT',
    description: 'Formar a los participantes en la operación y monitoreo de dispositivos tecnológicos utilizados en la seguridad privada (CCTV, alarmas, controles de acceso). El curso abarca la operación, supervisión y respuesta a eventos.', 
    direction: 'direction2',
    ciclos: {
      ciclo1: {
        title: 'Fundamentación modulo basico enfasis OMT (120 horas)',
        description: 'Curso inicial de 120 horas que sienta las bases para la operación y gestión de sistemas de medios tecnológicos, incluyendo el uso básico de software de monitoreo, CCTV y sistemas de alarma. Otorga la competencia fundamental para un OMT.'
      },
      ciclo2: {
        title: 'Reentrenamiento basico (30 horas)',
        description: 'Actualización obligatoria (30 Horas) para operadores. Revisa los protocolos de monitoreo, la reacción a alarmas y el manejo de nuevas plataformas tecnológicas de seguridad para mantener la eficiencia operativa.'
      },
      ciclo3: {
        title: 'Reentrenamiento electivo (30 horas)',
        description: 'Capacitación electiva de 30 horas que se enfoca en el rol de Coordinador de Medios Tecnológicos e Instalador de Medios Tecnológicos, cubriendo aspectos técnicos de configuración, mantenimiento y coordinación de personal OMT.'
      },
      ciclo4: {
        title: 'Reentrenamiento electivo especialización en Medios Tecnológicos de Seguridad (80 horas)',
        description: 'Ciclo de 80 horas que se enfoca en: Coordinador de Medios Tecnológicos, Instalador y Monitoreo y Supervisión de Centros de Establecimientos de Detección Preventiva y Carcelarios. Formación avanzada en sistemas complejos.'
      },
      ciclo5: {
        title: 'Profundización en Medios Tecnológicos de Seguridad (30 horas)',
        description: 'Módulo de 30 horas para operadores experimentados. Profundiza en la optimización de sistemas, la auditoría de seguridad electrónica y la integración avanzada de diferentes tecnologías (CCTV, Alarmas, GPS, etc.).'
      }
    } 
  },
  { 
    src: image5, 
    title: 'Seminarios', 
    description: 'Dirigido a directivos, coordinadores, jefes de riesgo y asesores de seguridad. Se enfoca en la gestión administrativa, legal, financiera y operativa de los servicios de vigilancia privada.', 
    direction: 'direction1',
    ciclos: {
      ciclo1: {
        title: 'SEMINARIOS ADMINISTRATIVOS (30 HORAS)', 
        description: 'Seminario de 30 horas que aborda la Administración de Servicios, Director de Operaciones y la Gestión Legal y Financiera de la Seguridad Privada. Es fundamental para el liderazgo estratégico y el cumplimiento normativo.'
      },
      ciclo2: {
        title: 'SEMINARIOS DE GESTIÓN Y RIESGO (30 HORAS)',
        description: 'Seminario de 30 horas enfocado en el rol de Jefe de Riesgo, Auditoría y Control de Gestión. Incluye la coordinación de medios tecnológicos y el conocimiento de Centros de Establecimientos de Detección Preventiva y Carcelarios.'
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