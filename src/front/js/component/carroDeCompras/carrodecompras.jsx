import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const CarroDeCompras = () => {
  return (
    <>
      <div className="container-fluid mx-0 bg-dark pb-5">
        <h1 className="tituloCarro text-warning mx-auto">Tu carro</h1>
        <div
          className="cajaProducto card mx-auto flex-row mb-5  "
          style={{ background: "#323332" }}
        >
          <AiFillMinusCircle className="text-danger position-absolute top-0 start-100 translate-middle fs-2" />

          <img
            src="https://picsum.photos/150"
            className="imgProducto img-fluid "
            alt="producto"
          />
          <div className="cajaDescripcionProducto card-body ">
            <h5 className="text-white">Nombre guitarra</h5>
            <p className="card-text text-warning">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              <Link
                className="LinkCarro btn btn-outline"
                to="/carroDeComprasVacio"
                href="/carroDeComprasVacio"
              >
                vistaCarroVacio
              </Link>
            </p>
            <h5 className="h5codigo text-white">Código guitarra</h5>
          </div>
        </div>
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
            className="botonPagar btn btn-lg col-4  mt-5 rounded-pill text-white"
          >
            Ir a pagar
          </button>
        </div>
      </div>
    </>
  );
};
