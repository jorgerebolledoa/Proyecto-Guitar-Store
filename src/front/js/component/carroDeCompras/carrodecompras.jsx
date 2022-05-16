import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";

export const CarroDeCompras = () => {
  return (
    <>
      <div className="container-fluid mx-0 bg-dark pb-5">
        <h1
          className="text-warning mx-auto w-75 "
          style={{ paddingTop: "150px" }}
        >
          Tu carro
        </h1>

        <div
          className="card mx-auto flex-row mb-5 w-75 "
          style={{ background: "#323332" }}
        >
          <AiFillMinusCircle className="text-danger position-absolute top-0 start-100 translate-middle fs-2" />

          <img
            src="https://picsum.photos/150"
            className="m-3 img-fluid w-25"
            alt="producto"
          />
          <div className="card-body m-3 ">
            <h5 className="text-white">Nombre guitarra</h5>
            <p className="card-text text-warning">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <h5 className="text-white">Código guitarra</h5>
          </div>
        </div>
      </div>
    </>
  );
};
