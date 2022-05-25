
import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import CardDerecha from "../component/Vista_principal/CardimgDerecha.jsx";
import Cardlateral from "../component/Vista_principal/Cardlateral.jsx";
import { useParams } from "react-router-dom";
export const ProductDetail = () => {
  const { product } = useParams();

  useEffect(() => { }, []);
  const [lista, setlista] = useState([]);
  const urlApi = "http://localhost:3001/api/products/id/" + product
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

    <div className="container " key={lista.id}>
      <div className="row ">
        <div className="col-12 col-md-12">
          <Cardlateral
            img={lista.img}
            title={lista.name}
            text={lista.description_1}
            linkbtn={"/producto/" + lista.name}
            textbtn="Comprar"
          />
        </div>
        <div className="col-12 col-md-12">
          <CardDerecha
            img={lista.img}
            title={lista.name}
            text={lista.description_2}
            linkbtn={"/producto/" + lista.name}
            textbtn="Comprar"
          />
        </div>
        <div className="col-12 col-md-12">
          <Cardlateral
            img={lista.img}
            title={lista.name}
            text={lista.description_1}
            linkbtn={"/producto/" + lista.name}
            textbtn="Comprar"
          />
        </div>
        <div className="col-12 col-md-12">
          <CardDerecha
            img={lista.img}
            title={lista.name}
            text={lista.description_2}
            linkbtn={"/producto/" + lista.name}
            textbtn="Comprar"
          />
        </div>
      </div>
    </div>
  )
}