import React, { useEffect } from "react";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { HomeMAndV } from "../../components/HomeMAndV";
import { HomeAwards } from "../../components/HomeAwards";
import { HomeBigCalendar } from "../../components/HomeBigCalendar";
import { HomeAllies } from "../../components/HomeAllies";

import image1 from '../../assets/home/modalHome/imagen1.png';
import image2 from '../../assets/home/modalHome/imagen2.png';
import image3 from '../../assets/home/modalHome/imagen3.png';
import image4 from '../../assets/home/modalHome/imagen4.png';
import image5 from '../../assets/home/modalHome/imagen5.png';
import image6 from '../../assets/home/modalHome/imagen6.png';

const images = [image1, image2, image3, image4, image5, image6]; // Array de imágenes

const Home =  ({ showModal }) => {

  useEffect(() => {
    const imageShown = sessionStorage.getItem('imageShown');

    if (!imageShown) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      sessionStorage.setItem('imageShown', 'true'); // Marcar que ya se ha mostrado
      showModal(<img src={randomImage} style={{ width: '100%', height: '100%' }} alt="Imagen aleatoria" />);
    }
  }, [showModal]);

  return (
    <div>
      <HomeSlider />
      <HomeAboutUs showModal={showModal}/>
      <HomeMAndV />
      <HomeAwards />
      <HomeBigCalendar />
      <HomeAllies />
    </div>
  );
}

export { Home };