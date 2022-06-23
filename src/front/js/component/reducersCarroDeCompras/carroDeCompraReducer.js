import { TYPES } from "./carroDeComprasActions";
// import { React, useContext } from "react";
// import { Context } from "../store/appContext";


export const carroDeComprasInitialState = {
    products: [],
    cart: []
}
// console.log(carroDeComprasInitialState)

export function carroDeComprasReducer(state, actions) {
    switch (actions.type) {
        case TYPES.ADD_TO_CART: {
            // newItem captura la información del los productos y los busca 1 por 1
            let newItem = state.products.find((item) => item.id === newItem.id);
            // console.log(newItem)
            let itemAddedInCart = state.cart.find((item) => item.id === newItem.id)
            return itemAddedInCart ?
                {
                    ...state,
                    cart: state.cart.map((item) => item.id === actions.payload.id ? { ...item, quantity: item.quantity + 1 }
                        : item)
                } :
                {
                    ...state,
                    cart: [...state.cart, { ...actions.payload, quantity: 1 }]
                }

        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(item => item.id === actions.payload)
            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map((item) => item.id === actions.payload ? { ...item, quantity: item.quantity - 1 } : item)
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== actions.payload)
            }
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== actions.payload)
            }
        }
        case TYPES.CLEAR_CART: {
            return carroDeComprasInitialState
        }
        default:
            return state;
    }
}