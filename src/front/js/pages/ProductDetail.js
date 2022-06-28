import React, { useContext } from "react";
import "../../styles/img.css";
import { useParams } from "react-router-dom";
import Slider from "../component/Vista_principal/Slider";
import { Context } from "../store/appContext";
import { CartState } from "../store/cartContext";

export const ProductDetail = () => {
  const { product } = useParams();
  const { store, actions } = useContext(Context);

  actions.fetchDetalleDeProductos(product)

  const addToLocalStorage = {

  }

  return (
    <div key={store.lista?.id}>
      <nav className="navbar bg-secondary fixed-top m-5 ">
        <div className="container-fluid d-flex justify-content-end">
          <button type="button" class="btn btn-secondary" href={"/carroDeCompras/" + store.lista?.id} onClick={() => actions.addToCart(store.lista)} >Añadir al carrito</button>


        </div>
      </nav>
      <div className="container-fluid">
        <Slider
          img={store.lista?.img1}
          title={store.lista?.tittle_description_1}
          text={store.lista?.description_1}
        />
        <Slider
          flipped={true}
          img={store.lista?.img2}
          title={store.lista?.tittle_description_2}
          text={store.lista?.description_2}

        />
        <Slider
          img={store.lista?.img3}
          title={store.lista?.tittle_description_3}
          text={store.lista?.description_3}

        />
        <Slider
          flipped={true}
          img={store.lista?.img4}
          title={store.lista?.tittle_description_4}
          text={store.lista?.description_4}

        />
      </div>
    </div>
  )
}