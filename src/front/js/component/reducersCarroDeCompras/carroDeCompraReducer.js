import { TYPES } from "./carroDeComprasActions";
import react from "react";

export const carroDeComprasInitialState = {
    products: [{
        id: 1,
        name: "name1",
        price: "500"
    }, {
        id: 2,
        name: "name2",
        price: "600"
    },
    {
        id: 3,
        name: "name3",
        price: "1000"
    }],
    cart: [],

}

export function carroDeComprasReducer(state, actions) {
    switch (actions.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(
                product => product.id === actions.payload);
            let itemAddedInCart = state.cart.find((item) => item.id === newItem.id)

            return itemAddedInCart ?
                {
                    ...state,
                    cart: state.cart.map((item) => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 }
                        : item)
                } :
                {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }]
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