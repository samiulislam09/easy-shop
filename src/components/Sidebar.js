import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";
import { SidebarContainer } from "../styles/Sidebar.styles";
import { useState } from "react";
const Sidebar = () => {
  const { isOpen, closeSideBar } = useProductsContext();
  return (
    <div>
      <SidebarContainer>
        <aside className={`${isOpen ? "sidebar show-sidebar" : "sidebar"}`}>
          <div className="sidebar-header">
            <h4>Easy Shop</h4>
            <button className="close-btn" onClick={closeSideBar}>
              <FaTimes />
            </button>
          </div>
          <ul className="links">
            <li>
              <Link to="/" onClick={closeSideBar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeSideBar}>
                About
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={closeSideBar}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/checkout" onClick={closeSideBar}>
                Checkout
              </Link>
            </li>
          </ul>
          <div className="cart-btn-wrapper">
            <CartButtons />
          </div>
        </aside>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
