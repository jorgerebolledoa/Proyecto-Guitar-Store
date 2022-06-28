import React from "react";
import MapProducts from "./MapProducst.jsx";

export const ProductsViewAdmin = () => {
  return (
    <>
      <br id="pageTop"></br>
      <br></br>
      <br></br>
      <div className="body_list">
      <div className="container p-4 rounded ">
      <div className="card-body">
              <div className="card-title ">
                <h6>
                  <small className="px-1 text-white">Dashboard de productos</small>
                  <a href="/adminprueba" className="text-warning float-end">volver</a>
                </h6>
              </div>
      <MapProducts />
      </div>
      </div>
      </div>
    </>
  );
};