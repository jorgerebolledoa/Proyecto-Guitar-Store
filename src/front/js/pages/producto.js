import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cards from "./Cards.jsx";
import Cardlateral from "/src/front/js/component/Vista principal/Producto-descripcion.jsx";
import CardDerecha from "/src/front/js/component/Vista principal/CardimgDerecha.jsx";
import X250 from "../../img/X250BKfull.png";

export const Producto = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="m-2 p-2">
        <Cardlateral
          img={X250}
          title="X250"
          text="Some quick example text to build on the card"
          linkbtn="/X250"
          textbtn="Comprar"
        />
        <CardDerecha
          bg="bg-secondary"
          img={X250}
          title="Guitarra2"
          text="Some quick example text to build on the card"
          linkbtn="https://picsum.photos/400/300"
          textbtn="Comprar"
        />
        <Cardlateral
          img={X250}
          title="Guitarra3"
          text="Some quick example text to build on the card"
          linkbtn="https://picsum.photos/400/300"
          textbtn="Comprar"
        />
      </div>
      <Cards />
    </>
  );
};
