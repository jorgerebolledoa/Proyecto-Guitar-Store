import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Cardlateral from "/src/front/js/component/Vista principal/Producto-descripcion.jsx";
import CarouselM from "/src/front/js/component/Vista principal/Carousel-Marca.jsx";
import X250 from "../../img/X250BKfull.png";

export const Producto = () => {
  const [lista, setlista] = useState([]);

  const urlApi =
    "https://assets.breatheco.de/apis/fake/todos/user/jorgerebolledo";

  useEffect(() => {
    getTask(urlApi);
  }, []);

  const getTask = (url) => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const updateTask = (url, task) => {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const crear = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      let newlist = [...lista, { label: e.target.value, done: true }];
      setlista(newlist);
      updateTask(urlApi, newlist);
      e.target.value = "";
    }
  };
  const deletelist = (index) => {
    lista.splice(index, 1);
    setlista([...lista]);
    updateTask(urlApi, [...lista]);
  };

  return (
    <>
      <CarouselM img={X250} />

      <div className="m-2 p-2">
        <Cardlateral
          img={X250}
          title="X250"
          text="Some quick example text to build on the card"
          linkbtn="/X250"
          textbtn="Comprar"
        />
        <Cardlateral
          img={X250}
          title="X300"
          text="Some quick example text to build on the card"
          linkbtn="/X250"
          textbtn="Comprar"
        />
        <Cardlateral
          img={X250}
          title="x400"
          text="Some quick example text to build on the card"
          linkbtn="https://picsum.photos/400/300"
          textbtn="Comprar"
        />
      </div>
    </>
  );
};
