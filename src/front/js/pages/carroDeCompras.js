import React from "react";
import { Link, useParams } from "react-router-dom";
import { useReducer, useState, useEffect } from "react";
import { CardProductosDelCarro } from "../component/carroDeCompras/CardProductosDelCarro.jsx";
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
  // const { product } = useParams();

  useEffect(() => { }, []);
  const [lista, setlista] = useState([]);

  const urlApi = "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us46.gitpod.io/api/products/id/5"
  useEffect(() => {
    getTask(urlApi);
  }, []);
  const getTask = (url) => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setlista(data);
      })
      .catch((error) => console.log(error));
  };

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
        {products.map((product) => (<CardProductosDelCarro key={product.id} name={lista.name} id={lista.id} price={lista.price} addToCart={addToCart} />))}

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
