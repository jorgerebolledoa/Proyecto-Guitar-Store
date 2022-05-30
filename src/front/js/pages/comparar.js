import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardComparacion from "../component/Vista_principal/Card-comparacion.jsx";
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
              select="X7000"
              select2="X300"
              select3="X500"
              text="Selectiona la guitarra a comparar y podras ver sus especificaciones"
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
              select="X250"
              select2="X400"
              select3="X500"
              text="Selectiona la guitarra a comparar y podras ver sus especificaciones"
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
