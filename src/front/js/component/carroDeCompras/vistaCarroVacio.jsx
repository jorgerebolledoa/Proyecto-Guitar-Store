import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const CarroDeComprasVacio = () => {
  return (
    <>
      <div className="fondoCarroVacio container-fluid bg-dark pb-5 pt-5">
        <div
          className="cajaProductoVacio card mx-auto mb-5  "
          style={{ background: "#323332" }}
        >
          <h3 className="text-warning tituloCarroVacio pt-5">
            Tu carro{" "}
            <Link
              className="LinkCarro "
              to="/formularioDePago"
              href="/formularioDePago"
            >
              <FaShoppingCart className="text-white" />
            </Link>
          </h3>

          <p className="card-text text-white parrafoCarro">
            El carro de compras está vacío.
          </p>
          <button
            type="button"
            className="botonPagar btn btn-lg col-4  mt-5 rounded-pill text-white"
          >
            Volver
          </button>
        </div>
      </div>
    </>
  );
};
