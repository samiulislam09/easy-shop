import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import { useProductsContext } from "../context/products_context";

const ProductList = () => {
  const { productsLoading, productsError, products } = useProductsContext();
  return <GridView products={products} />;
};

export default ProductList;
