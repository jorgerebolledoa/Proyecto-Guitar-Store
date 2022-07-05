import React, { useContext, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Slider from "./Slider.js";

const Mapeo_Categories = () => {
  const { id_categori } = useParams();
  const [lista, setlista] = useState([]);

  const urlApi = "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us51.gitpod.io/api/products/id_categori/" + id_categori

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
        <Slider
          key={tastk.id}
          img={tastk.img1}
          title={tastk.name}
          text={tastk.description_1}
          link={"/producto/" + tastk.id}
        />
      );
    })
  );
};
export default Mapeo_Categories;
