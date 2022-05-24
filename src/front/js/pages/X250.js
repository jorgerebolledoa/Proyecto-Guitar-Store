import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cardlateral from "/src/front/js/component/Vista principal/Cardlateral.jsx";
import CardDerecha from "/src/front/js/component/Vista principal/CardimgDerecha.jsx";
import X250 from "../../img/X250BKfull.png";
import X2502 from "../../img/X250-2.jpg";

export const X250page = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="m-2 p-2">
        <Cardlateral
          img={X250}
          title="X250"
          text="La X250 ofrece un valor excelente con una plétora de excelentes características que se encuentran en los modelos de la serie X de gama alta, como la configuración de pastilla versátil HSH con humbuckers EMG SRO OC1 y pastilla de bobina simple Alnico V, un sistema de trémolo de doble bloqueo para una excelente estabilidad de afinación y cuerpo de madera de Meranti con mástil de Arce de roca dura. Disponible en tres acabados geniales: Lágrima Rosada, Azul Kona y Negro."
          linkbtn="/Comparar"
          textbtn="comparar"
        />
        <CardDerecha
          img={X2502}
          title="Cuerpo de Meranti"
          text="El cuerpo de Meranti tiene características tonales similares a las de Caoba con un rango medio-medio fuerte que cortará la mezcla con autoridad para el ritmo mientras proporciona dulces agudos para solos melodiosos."
          linkbtn="https://picsum.photos/400/300"
          textbtn="Comprar"
        />
        <Cardlateral
          img={X250}
          title="X250"
          text="La X250 ofrece un valor excelente con una plétora de excelentes características que se encuentran en los modelos de la serie X de gama alta, como la configuración de pastilla versátil HSH con humbuckers EMG SRO OC1 y pastilla de bobina simple Alnico V, un sistema de trémolo de doble bloqueo para una excelente estabilidad de afinación y cuerpo de madera de Meranti con mástil de Arce de roca dura. Disponible en tres acabados geniales: Lágrima Rosada, Azul Kona y Negro."
          linkbtn="https://picsum.photos/400/300"
          textbtn="Comprar"
        />
      </div>
    </>
  );
};
