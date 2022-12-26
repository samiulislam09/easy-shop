import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 90,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "addToCart", payload: { id, color, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: "removeCartItem", payload: { id } });
  };
  const clearCart = () => {
    dispatch({ type: "clearCart" });
  };
  const toggleAmount = (id, value) => {
    dispatch({ type: "toggleCartAmount", payload: { id, value } });
  };
  useEffect(() => {
    dispatch({ type: "countCartTotal" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
