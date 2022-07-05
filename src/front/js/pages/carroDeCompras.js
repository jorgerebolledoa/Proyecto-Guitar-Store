import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../component/carroDeCompras/CartItem.jsx";
import { Context } from "../store/appContext";

export const CarroDeCompras = () => {

  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-fluid mx-0 bg-dark pb-5">
        <h1 className="tituloCarro text-warning mx-auto">
          Tu carro{" "}
          {/* <button onClick={() => "clearCart()"}>Limpiar Carro</button> */}
          <Link
            className="LinkCarro btn btn-outline text-1 text-warning"
            to="/carroDeComprasVacio"
            href="/carroDeComprasVacio"
          >
            vistaCarroVacio
          </Link>
        </h1>


        <div className="cajaResumenPedido text-white mx-auto row">
          <h5 className="col-12">Resumen de pedido</h5>
          <span className="col-6">1 x Boden Fusion NX 6 AY</span>
          <span className="col-6 start-0 ">$2699</span>
          <span className="col-6">Envio:</span>
          <span className="col-6 start-0 ">$199</span>
          <hr />
          <span className="col-6">Total:</span>
          <span className="col-6 start-0 ">$2998</span>
          {
            store.cart.map((item, index) => (
              <CartItem key={index} data={item} deleteFromCart={actions.deleteFromCart} product={item} />
            ))}
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
