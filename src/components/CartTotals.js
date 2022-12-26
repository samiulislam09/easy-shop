import React from "react";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";
import { Wrapper } from "../styles/CartTotals.styles";

const CartTotals = () => {
  const { totalAmount, shippingFee } = useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>Subtotal: {totalAmount}</h5>
          <p>Shipping Fee: {shippingFee}</p>
          <hr />
          <h4>total: {totalAmount + shippingFee}</h4>
        </article>
        <Link to="/checkout" className="btn">
          Proceed To Checkout
        </Link>
      </div>
    </Wrapper>
  );
};

export default CartTotals;
