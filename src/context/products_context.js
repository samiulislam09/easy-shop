import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";

const initialState = {
  isOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
};
const url = "https://course-api.com/react-store-products";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSideBar = () => {
    dispatch({ type: "sidebar_open" });
  };
  const closeSideBar = () => {
    dispatch({ type: "sidebar_close" });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: "getProductsBegin" });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: "getProductSuccess", payload: products });
    } catch (error) {
      dispatch({ type: "getProductError" });
    }
  };
  const fetchSingleProduct = async (url) => {
    dispatch({ type: "getSinglepRoductBegin" });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({ type: "getSingleProductSuccess", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "getSingleProductError" });
    }
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSideBar, closeSideBar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
