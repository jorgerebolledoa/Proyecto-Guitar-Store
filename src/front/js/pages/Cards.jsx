import React from "react";
import Card from "./Card.jsx";

const Cards = () => {
  return (
    <div className="container">
      <div className="row mb-2">
        <>
          <div className=" col-12 p-1 ">
            <Card
              img="https://picsum.photos/400/300"
              title="Card title"
              text="Some quick example text to build on the card"
              linkbtn="/Producto"
              textbtn="Producto"
            />
          </div>
          <div className=" col-12 p-1">
            <Card
              img="https://picsum.photos/400/300"
              title="Card title"
              text="Some quick example text to build on the card"
              linkbtn="https://picsum.photos/400/300"
              textbtn="Go somewhere"
            />
          </div>
          <div className=" col-12 p-1">
            <Card
              img="https://picsum.photos/400/300"
              title="Card title"
              text="Some quick example text to build on the card"
              linkbtn="https://picsum.photos/400/300"
              textbtn="Go somewhere"
            />
          </div>
          <div className=" col-12 p-1">
            <Card
              img="https://picsum.photos/400/300"
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
