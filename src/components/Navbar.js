import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import { NavContainer } from "../styles/NavBar.styles";

const Nav = () => {
  return (
    <div>
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h4>easy shop</h4>
            </Link>
            <button className="nav-toggle">
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
