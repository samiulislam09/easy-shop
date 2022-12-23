import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { Wrapper } from "../styles/FeaturedProducts.styles";

const FeaturedProducts = () => {
  const { productsLoading, productsError, featuredProducts } =
    useProductsContext();
  console.log(productsLoading, productsError, featuredProducts);
  if (productsLoading) {
    <Loading />;
  }
  if (productsError) {
    <Error />;
  }

  return (
    <div>
      <Wrapper className="section">
        <div className="title">
          <h2>Featured Products</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center featured">
          {featuredProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <Product product={product} />
            </Link>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default FeaturedProducts;
