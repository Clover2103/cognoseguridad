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
import { Modal } from '../components/Modal';
import { RedesFlotantes } from '../components/Redes';
import { ScrollToTop } from '../components/ScrollToTop';
import { ChatWidget } from '../components/ChatWidget';

const RouterPages = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 790);
  const location = useLocation();

  const showModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <ScrollToTop />
      {location.pathname !== "/" && (
        isMobile ? 
          <NavBarResponsive /> : 
          <NavBar />
      )}
      {location.pathname !== "/" && <RedesFlotantes />}
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home" element={<Home showModal={showModal}/>} />
        <Route path="/curses" element={<Courses showModal={showModal}/>} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
      {location.pathname !== "/" && <ChatWidget />}
      <Modal isVisible={isModalVisible} hideModal={hideModal} content={modalContent} />
    </div>
    
  );
};

export { RouterPages }