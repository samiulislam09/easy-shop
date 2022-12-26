import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Wrapper } from "../styles/CartButtons.styles";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { user, user2, signOutUser } = useUserContext();
  const isuserLoggedIn = user || user2;
  const { closeSideBar } = useProductsContext();
  const { totalItems } = useCartContext();
  console.log(isuserLoggedIn, "kuutgiy");
  return (
    <>
      <Wrapper>
        <Link to="/cart" className="cart-btn" onClick={closeSideBar}>
          Cart
          <span className="cart-container">
            <FaShoppingCart />
            <span className="cart-value">{totalItems}</span>
          </span>
        </Link>
        {isuserLoggedIn ? (
          <button className="auth-btn" onClick={() => signOutUser()}>
            LogOut <FaUserMinus />
          </button>
        ) : (
          <Link to="/login" className="auth-btn">
            Login
            <FaUserPlus />
          </Link>
        )}
      </Wrapper>
    </>
  );
};

export default CartButtons;
