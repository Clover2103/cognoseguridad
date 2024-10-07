import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Hace scroll a la parte superior
  }, [pathname]);  // Se activa cuando cambia la ruta

  return null;
};

export { ScrollToTop };