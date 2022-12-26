import React from "react";
import { Wrapper } from "../styles/CartColumns.styles";

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>Product</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
      </div>
    </Wrapper>
  );
};

export default CartColumns;
