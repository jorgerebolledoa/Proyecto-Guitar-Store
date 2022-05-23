import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cardlateral from "/src/front/js/component/Vista principal/Producto-descripcion.jsx";
import CarouselM from "/src/front/js/component/Vista principal/Carousel-Marca.jsx";
import X250 from "../../img/X250BKfull.png";

export const Producto = () => {
  const [lista, setlista] = useState([]);

  const urlApi =
    "https://3001-jorgereboll-proyectofin-xn7vi0urb0g.ws-us45.gitpod.io/api/products";

  useEffect(() => {
    getTask(urlApi);
  }, []);

  const getTask = (url) => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setlista(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    lista.length > 0 &&
    lista.map((tastk, index) => {
      return (
        <Cardlateral
          img={tastk.img}
          title={tastk.name}
          text={tastk.description_1}
          linkbtn="/X250"
          textbtn="Comprar"
        />
      );
    })
  );
};
