import React, { useContext, useState, useEffect } from "react";
import Cardlateral from "./Cardlateral.jsx";

const Mapeo_cardlateral = () => {
  const [lista, setlista] = useState([]);

  const urlApi =
    "https://3001-jorgereboll-proyectofin-bx4dnqdsqo4.ws-us45.gitpod.io/api/products";

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
          linkbtn={"/producto/" + tastk.name}
          textbtn="Comprar"
        />
      );
    })
  );
};
export default Mapeo_cardlateral;
