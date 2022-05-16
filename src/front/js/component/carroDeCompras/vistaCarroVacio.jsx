import React from "react";

export const CarroDeComprasVacio = () => {
  return (
    <>
      <div className="container-fluid mx-0 bg-dark pb-5">
        <div
          className="card mx-auto flex-row mb-5 w-75 "
          style={{ background: "#323332" }}
        >
          <div className="card-body m-3 ">
            <h5 className="text-white">Nombre guitarra</h5>
            <p className="card-text text-warning">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <h5 className="text-white">Código guitarra</h5>
          </div>
        </div>
        <div className="text-white mx-auto w-75 row">
          <button
            type="button"
            className="btn btn-warning btn-lg col-4 mx-auto mt-3 rounded-pill text-white"
          >
            Volver
          </button>
        </div>
      </div>
    </>
  );
};
