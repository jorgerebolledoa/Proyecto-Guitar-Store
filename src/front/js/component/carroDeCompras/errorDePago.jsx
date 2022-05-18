import React from "react";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

export const ErrorDePago = () => {
  return (
    <>
      <div className="fondoCarroVacio container-fluid bg-dark pb-5 pt-5">
        <div
          className="cajaProductoVacio card mx-auto mb-5  "
          style={{ background: "#323332" }}
        >
          <h3 className="text-warning tituloCarroVacio pt-5">
            Error de pago <MdErrorOutline className="fs-1 text-danger" />
          </h3>

          <p className="card-text text-white parrafoCarro">
            Ha ocurrido un problema al procesar tu pago.
          </p>
          <button
            type="button"
            className="botonPagar button btn btn-lg col-4  mt-5 rounded-pill text-white"
          >
            Volver
          </button>
        </div>
      </div>
    </>
  );
};
