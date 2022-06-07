import React, { useEffect, useState } from "react";
import "../../styles/img.css";
import { useParams } from "react-router-dom";
import Slider from "../component/Vista_principal/Slider";
export const ProductDetail = () => {
  const { product } = useParams();

  useEffect(() => { }, []);
  const [lista, setlista] = useState([]);
  const urlApi = "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us46.gitpod.io/api/products/id/" + product
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
  const addTolocalStorage = () => {
    localStorage.setItem("name", lista.name);
    localStorage.setItem("id", lista.id);
    localStorage.setItem("price", lista.price);
    localStorage.setItem("sku", lista.sku);
    localStorage.setItem("img", lista.img1);
    return (console.log(localStorage))
  }
  return (
    <div key={lista.id}>
      <nav className="navbar bg-secondary fixed-top m-5 ">
        <div className="container-fluid d-flex justify-content-end">
          <a className="navbar-brand text-warning pl-3" href={"/carroDeCompras/" + lista.id} onClick={addTolocalStorage} >Comprar</a>
        </div>
      </nav>
      <div className="container-fluid">
        <Slider
          img={lista.img1}
          title={lista.tittle_description_1}
          text={lista.description_1}

        />
        <Slider
          flipped={true}
          img={lista.img2}
          title={lista.tittle_description_2}
          text={lista.description_2}

        />
        <Slider
          img={lista.img3}
          title={lista.tittle_description_3}
          text={lista.description_3}

        />
        <Slider
          flipped={true}
          img={lista.img4}
          title={lista.tittle_description_4}
          text={lista.description_4}

        />
      </div>
    </div>
  )
}