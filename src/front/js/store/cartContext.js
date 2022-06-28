import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../component/reducersCarroDeCompras/carroDeCompraReducer.js"


const Cart = createContext();

const CartContext = ({ children }) => {
    const products = store.list;

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart);
};

export default CartContext;
