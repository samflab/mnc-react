import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../hooks/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};


const useCart = () => useContext(CartContext);

export {useCart, CartProvider}