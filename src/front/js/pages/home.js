import React from "react";
import "../../styles/home.css";
import Card from "../component/Vista_principal/Card.jsx";
import X250 from "../../img/X250BKfull.png";
import Carousel from "../component/Vista_principal/Carousel.jsx";

export const Home = () => {
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
                linkbtn="/product1"
                textbtn="product1"
              />
            </div>
            <div className=" col-12 p-1">
              <Card
                img={X250}
                title="Card title"
                text="Some quick example text to build on the card"
                linkbtn="/product2"
                textbtn="product2"
              />
            </div>
            <div className=" col-12 p-1">
              <Card
                img={X250}
                title="Card title"
                text="Some quick example text to build on the card"
                linkbtn="/product3"
                textbtn="product3"
              />
            </div>
          </>
        </div>
      </div>
    </>
  );
};
