import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CardProductosDelCarro } from "../component/carroDeCompras/cardProductosDelCarro.jsx";

export const CarroDeCompras = () => {
  return (
    <>
      <div className="container-fluid mx-0 bg-dark pb-5">
        <h1 className="tituloCarro text-warning mx-auto">
          Tu carro{" "}
          <Link
            className="LinkCarro btn btn-outline"
            to="/carroDeComprasVacio"
            href="/carroDeComprasVacio"
          >
            vistaCarroVacio
          </Link>
        </h1>
        <CardProductosDelCarro />
        <div className="cajaResumenPedido text-white mx-auto row">
          <h5 className="col-12">Resumen de pedido</h5>
          <span className="col-6">1 x Boden Fusion NX 6 AY</span>
          <span className="col-6 start-0 ">$2699</span>
          <span className="col-6">Envio:</span>
          <span className="col-6 start-0 ">$199</span>
          <hr />
          <span className="col-6">Total:</span>
          <span className="col-6 start-0 ">$2998</span>

          <button
            type="button"
            className="botonPagar button btn btn-lg col-4  mt-5 rounded-pill text-white"
          >
            Ir a pagar
          </button>
        </div>
      </div>
    </>
  );
};
