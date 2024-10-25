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
import image7 from '../../assets/home/modalHome/imagen7.jpg';

const imagesWithLinks = [
  { src: image7, link: "https://forms.gle/XjDmsstiJZJAAuwW6" },
  { src: image7, link: "https://forms.gle/XjDmsstiJZJAAuwW6" },
  { src: image7, link: "https://forms.gle/XjDmsstiJZJAAuwW6" },
  { src: image7, link: "https://forms.gle/XjDmsstiJZJAAuwW6" },
  { src: image7, link: "https://forms.gle/XjDmsstiJZJAAuwW6" },
  { src: image7, link: "https://forms.gle/XjDmsstiJZJAAuwW6" },
];

const Home = ({ showModal }) => {
  useEffect(() => {
    const imageShown = sessionStorage.getItem('imageShown');

    if (!imageShown) {
      const randomImage = imagesWithLinks[Math.floor(Math.random() * imagesWithLinks.length)];
      sessionStorage.setItem('imageShown', 'true'); // Marcar que ya se ha mostrado
      
      showModal(
        <a href={randomImage.link} target="_blank" rel="noopener noreferrer">
          <img src={randomImage.src} style={{ width: '100%' }} alt="Imagen aleatoria" />
          <button className="w-100 btn btn-danger text-white ">CONOCER MAS</button>
        </a>
      );
    }
  }, [showModal]);

  return (
    <div>
      <HomeSlider />
      <HomeAboutUs showModal={showModal} />
      <HomeMAndV />
      <HomeAwards />
      <HomeBigCalendar />
      <HomeAllies />
    </div>
  );
}

export { Home };
