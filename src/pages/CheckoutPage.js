import React from "react";
import styled from "styled-components";
import { StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <div>
      <Wrapper className="page-100">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              Add produuct
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
