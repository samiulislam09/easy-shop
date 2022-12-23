import React from "react";
import { Wrapper } from "../styles/Product.styles";

const Product = ({ product }) => {
  return (
    <div>
      <Wrapper>
        <div className="container">
          <img src={product.image} alt="" />
        </div>
        <footer>
          <h5>{product.name}</h5>
          <p>{product.price} taka</p>
        </footer>
      </Wrapper>
    </div>
  );
};

export default Product;
