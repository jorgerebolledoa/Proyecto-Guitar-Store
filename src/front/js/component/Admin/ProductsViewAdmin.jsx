import React from "react";
import MapProducts from "./MapProducst";

export const ProductsViewAdmin = () => {
  return (
    <>
      <br id="pageTop"></br>
      <br></br>
      <br></br>
      <div className="container p-4 rounded bg-dark">
      <div className="card-body">
              <div className="card-title ">
                <h6>
                  <small className="px-1 text-white">Dashboard de productos</small>
                </h6>
              </div>
      <MapProducts />
      </div>
      </div>
    </>
  );
};