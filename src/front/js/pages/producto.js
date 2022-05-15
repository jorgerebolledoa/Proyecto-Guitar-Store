import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cards from "./Cards.jsx";
import Carousel from "/src/front/js/component/Vista principal/Producto-descripcion.jsx";
import X250 from "../../img/X250BKfull.png";

export const Producto = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Carousel img={X250} />
      <Cards />
    </>
  );
};
