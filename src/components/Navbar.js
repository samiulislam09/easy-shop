import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import { NavContainer } from "../styles/NavBar.styles";

const Nav = () => {
  const { openSideBar } = useProductsContext();
  return (
    <div>
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h4>easy shop</h4>
            </Link>
            <button className="nav-toggle" onClick={openSideBar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <CartButtons />
        </div>
      </NavContainer>
    </div>
  );
};

export default Nav;
