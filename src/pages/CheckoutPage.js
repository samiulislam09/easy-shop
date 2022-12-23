import React from "react";
import styled from "styled-components";
import { StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div>
      <Wrapper>
        <h1>Checkout</h1>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
