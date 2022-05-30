import React from "react";
import Carousel from "../component/Vista_principal/Carousel.jsx";
import Mapeo_Slider from "../component/Vista_principal/Mapeo-Silder";
import X250 from "../../img/X250BKfull.png";

export const Home = () => {
  return (
    <>
      <Carousel img={X250} />
      <Mapeo_Slider />
    </>
  );
};  