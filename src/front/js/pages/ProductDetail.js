
import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import CardDerecha from "../component/Vista_principal/CardimgDerecha.jsx";
import Cardlateral from "../component/Vista_principal/Cardlateral.jsx";
import { useParams } from "react-router-dom";
export const ProductDetail = () => {
  const { product } = useParams();

  useEffect(() => { }, []);
  const [lista, setlista] = useState([]);
  const urlApi =
    "http://localhost:3001/api/products";
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
      console.log(product)
      if (tastk.name == product) {
        return (
          <>
            <Cardlateral
              key={tastk.id}
              img={tastk.img}
              title={tastk.name}
              text={tastk.description_1}
              linkbtn={"/producto/" + tastk.name}
              textbtn="Comprar"
            />
            <CardDerecha
              key={tastk.id + 1}
              img={tastk.img}
              title={tastk.name}
              text={tastk.description_2}
              linkbtn={"/producto/" + tastk.name}
              textbtn="Comprar"
            />

          </>

        )

      }
      else {
        console.log("no entro al if")
      }
    })
  );
};
