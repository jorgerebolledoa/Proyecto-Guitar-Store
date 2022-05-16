import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cards from "./Cards.jsx";
import Cardlateral from "/src/front/js/component/Vista principal/Producto-descripcion.jsx";
import CardDerecha from "/src/front/js/component/Vista principal/CardimgDerecha.jsx";
import X250 from "../../img/X250BKfull.png";

export const Comparar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="pt-5">
        <Cards />
      </div>
    </>
  );
};
