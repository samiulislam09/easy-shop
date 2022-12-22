import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Wrapper } from "../styles/CartButtons.styles";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSideBar } = useProductsContext();
  return (
    <>
      <Wrapper>
        <Link to="/cart" className="cart-btn" onClick={closeSideBar}>
          Cart
          <span className="cart-container">
            <FaShoppingCart />
            <span className="cart-value">12</span>
          </span>
        </Link>
        <button className="auth-btn">
          Login
          <FaUserPlus />
        </button>
      </Wrapper>
    </>
  );
};

export default CartButtons;
