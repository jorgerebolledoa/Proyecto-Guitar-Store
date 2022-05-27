import "../../styles/home.css";
import Card from "../component/Vista_principal/Card.jsx";
import X250 from "../../img/X250BKfull.png";
import React, { useEffect, useState } from "react";
export const Home = () => {
  useEffect(() => { }, []);
  const [lista, setlista] = useState([]);
  const urlApi = "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us46.gitpod.io/api/categories"
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
        <div key={tastk.id}>
          <Card
            img={X250}
            title={tastk.name}
            text={tastk.description}
            linkbtn={"/categoria/" + tastk.id}
            textbtn="Comprar"
          />
        </div>
      );
    })
  );
};

/* export const Home = () => {
  return (
    <>
      <Carousel img={X250} img2={X250} img3={X250} />
      <div className="container">
        <div className="row mb-2">
          <>
            <div className=" col-12 p-1 ">
              <Card
                img={X250}
                title="Card title"
                text="Some quick example text to build on the card"
                linkbtn="/Producto"
                textbtn="Producto"
              />
            </div>
            <div className=" col-12 p-1">
              <Card
                img={X250}
                title="Card title"
                text="Some quick example text to build on the card"
                linkbtn="/producto1"
                textbtn="producto/1"
              />
            </div>
            <div className=" col-12 p-1">
              <Card
                img={X250}
                title="Card title"
                text="Some quick example text to build on the card"
                linkbtn="/producto2"
                textbtn="producto/2"
              />
            </div>
            <div className=" col-12 p-1">
              <Card
                img={X250}
                title="Card title"
                text="Some quick example text to build on the card"
                linkbtn="/producto3"
                textbtn="producto/3"
              />
            </div>
          </>
        </div>
      </div>
    </>
  );
}; */
