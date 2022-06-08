import { TYPES } from "./carroDeComprasActions";

export const carroDeComprasInitialState = {

    cart: JSON.parse(localStorage.getItem("cart")) || []
}

export function carroDeComprasReducer(state, actions) {
    switch (actions.type) {
        case TYPES.ADD_TO_CART: {

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