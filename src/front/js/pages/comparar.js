import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardComparacion from "/src/front/js/component/Vista principal/Card-comparacion.jsx";
import X250 from "../../img/X250BKfull.png";
export const Comparar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container pt-5 ">
        <div className="row bg-secundary">
          <div className="col-6 ">
            <CardComparacion
              img={X250}
              title="X250"
              text="Some quick example text to build on the card"
              item="body: madera"
              item2="body"
              item3="body"
              linkbtn="/Producto"
              textbtn="Producto"
              linkbtn2="/Producto2"
              textbtn2="Producto2"
            />
          </div>
          <div className="col-6 ">
            <CardComparacion
              img={X250}
              title="X300"
              text="Some quick example text to build on the card"
              item="body: cuero "
              item2="body"
              item3="body"
              linkbtn="/Producto"
              textbtn="Producto"
              linkbtn2="/Producto2"
              textbtn2="Producto2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
