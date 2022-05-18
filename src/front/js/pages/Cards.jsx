import React from "react";
import Card from "./Card.jsx";
import X250 from "../../img/X250BKfull.png";

const Cards = () => {
  return (
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
              linkbtn="https://picsum.photos/400/300"
              textbtn="Go somewhere"
            />
          </div>
          <div className=" col-12 p-1">
            <Card
              img={X250}
              title="Card title"
              text="Some quick example text to build on the card"
              linkbtn="https://picsum.photos/400/300"
              textbtn="Go somewhere"
            />
          </div>
          <div className=" col-12 p-1">
            <Card
              img={X250}
              title="Card title"
              text="Some quick example text to build on the card"
              linkbtn="https://picsum.photos/400/300"
              textbtn="Go somewhere"
            />
          </div>
        </>
      </div>
    </div>
  );
};

export default Cards;
