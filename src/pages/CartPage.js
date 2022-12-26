import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  console.log(cart);
  if (cart.length < 1) {
    return (
      <div className="page-100">
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Your cart is empty</h2>
          <Link className="btn" to="/products">
            Add Product
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <CartContent />
    </div>
  );
};

export default CartPage;
