import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cardlateral from "/src/front/js/component/Vista principal/Producto-descripcion.jsx";
import X250 from "../../img/X250BKfull.png";

export const X250page = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="m-2 p-2">
        <Cardlateral
          img={X250}
          title="X250"
          text="Some quick example text to build on the card"
          linkbtn="https://picsum.photos/400/300"
          textbtn="Comprar"
        />
      </div>
    </>
  );
};
