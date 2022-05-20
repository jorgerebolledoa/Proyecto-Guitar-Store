import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cardlateral from "/src/front/js/component/Vista principal/Producto-descripcion.jsx";
import CarouselM from "/src/front/js/component/Vista principal/Carousel-Marca.jsx";
import X250 from "../../img/X250BKfull.png";

export const Producto = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <CarouselM img={X250} />

      <div className="m-2 p-2">
        <Cardlateral
          img={X250}
          title="X250"
          text="Some quick example text to build on the card"
          linkbtn="/X250"
          textbtn="Comprar"
        />
        <Cardlateral
          img={X250}
          title="X300"
          text="Some quick example text to build on the card"
          linkbtn="/X250"
          textbtn="Comprar"
        />
        <Cardlateral
          img={X250}
          title="x400"
          text="Some quick example text to build on the card"
          linkbtn="https://picsum.photos/400/300"
          textbtn="Comprar"
        />
      </div>
    </>
  );
};
