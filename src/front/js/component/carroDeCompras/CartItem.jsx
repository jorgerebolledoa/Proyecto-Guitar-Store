import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";

export const CartItem = ({ data, deleteFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <>
      <div className="cajaProducto card mx-auto flex-row mb-5  ">
        <AiFillMinusCircle
          onClick={() => deleteFromCart(id)}
          className="text-danger position-absolute top-0 start-100 translate-middle fs-2"
        />
        <img
          src="https://picsum.photos/150"
          className="imgProducto img-fluid "
          alt="producto"
        />
        <div className="cajaDescripcionProducto card-body ">
          <h5 className="text-white">{name}</h5>
          <p className="card-text text-warning">
            ${price * quantity} to {quantity} guitars
          </p>
          <h5 className="h5codigo text-white"> Codigo:{id}</h5>
        </div>
      </div>
    </>
  );
};