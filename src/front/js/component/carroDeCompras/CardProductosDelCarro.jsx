import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const CardProductosDelCarro = ({ data, addToCart, key }) => {
  return (
    <>
      <div className="cajaProducto card mx-auto flex-row mb-5  ">
        <AiFillMinusCircle className="text-danger position-absolute top-0 start-100 translate-middle fs-2" />
        <img
          src="https://picsum.photos/150"
          className="imgProducto img-fluid "
          alt="producto"
        />
        <div className="cajaDescripcionProducto card-body ">
          <h5 className="text-white">{key}</h5>
          <p className="card-text text-warning">{data}</p>
          <h5 className="h5codigo text-white">Código guitarra</h5>
          <button>{addToCart}</button>
        </div>
      </div>
    </>
  );
};
