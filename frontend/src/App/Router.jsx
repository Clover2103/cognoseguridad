import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Preview } from "../pages/preview";
import { Home } from "../pages/home";
import { Courses } from "../pages/courses";
import { Consultation } from "../pages/consultation";
import { Contact } from "../pages/contact";
import { NavBar } from '../components/NavBar';
import { NavBarResponsive } from '../components/NavBarResponsive';
import { Footer } from '../components/Footer';

const RouterPages = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 790);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {location.pathname !== "/" && (
        isMobile ? 
          <NavBarResponsive /> : 
          <NavBar />
      )}
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home" element={<Home />} />
        <Route path="/curses" element={<Courses />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}

    </div>
    
  );
};

export { RouterPages }