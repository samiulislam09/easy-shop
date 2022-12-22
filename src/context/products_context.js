import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";

const initialState = {
  isOpen: true,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSideBar = () => {
    dispatch({ type: "sidebar_open" });
  };
  const closeSideBar = () => {
    dispatch({ type: "sidebar_close" });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSideBar, closeSideBar }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
