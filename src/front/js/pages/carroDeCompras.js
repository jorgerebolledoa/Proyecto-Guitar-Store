import React from "react";
import { Link } from "react-router-dom";
import { useReducer, useEffect } from "react";
import { CartItem } from "../component/carroDeCompras/CartItem.jsx";
import { carroDeComprasInitialState, carroDeComprasReducer } from "../component/reducersCarroDeCompras/carroDeCompraReducer.js";
import { TYPES } from "../component/reducersCarroDeCompras/carroDeComprasActions.js";

export const CarroDeCompras = () => {
  const [state, dispatch] = useReducer(carroDeComprasReducer, carroDeComprasInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    // console.log(id)
    dispatch({ type: TYPES.ADD_TO_CART, payload: id })
  };
  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART })
  };
  // CODIGO PARA TOMAR PRODUCTOS POR ID
  // EL boton comprar tiene que realizar 2 acciones, 
  // la accion de añadir el elemento al arreglo carro que hay en el reducer
  // y añadir la información al local storage
  // 


  return (
    <>
      <div className="container-fluid mx-0 bg-dark pb-5">
        <h1 className="tituloCarro text-warning mx-auto">
          Tu carro{" "} <button onClick={() => clearCart()}>Limpiar Carro</button>
          <Link
            className="LinkCarro btn btn-outline"
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
          {cart.map((item, index) => (<CartItem key={index} data={item} deleteFromCart={deleteFromCart} />))}
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
