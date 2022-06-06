import React from "react";
import Carousel from "../component/Vista_principal/Carousel.jsx";
import Mapeo_Slider from "../component/Vista_principal/Mapeo-Silder";

export const Home = () => {
  return (
    <>
      <Carousel
        img="https://logos-download.com/wp-content/uploads/2020/07/Cort_Guitars_Logo.png"
        /*  img2="https://files2.soniccdn.com/files/2019/10/22/Strandberg%206.png" */
        img2="https://www.guitar-planet.co.uk/wp-content/uploads/2016/08/logo-Strandberg-500x227.png"
        img3="http://novaeramusica.com/img/cms/fender%20logo.jpg"
        img4="https://logos-download.com/wp-content/uploads/2020/07/PRS_Guitars_Logo.png"

      />
      <Mapeo_Slider />
    </>
  );
};  