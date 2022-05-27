import { TYPES } from "./carroDeComprasActions";

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

        }
        case TYPES.REMOVE_ONE_FROM_CART: {

        }
        case TYPES.REMOVE_ALL_FROM_CART: {

        }
        case TYPES.CLEAR_CART: {

        }
        default:
            return state;
    }
}