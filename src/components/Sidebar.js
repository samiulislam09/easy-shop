import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";
import { SidebarContainer } from "../styles/Sidebar.styles";
const Sidebar = () => {
  return (
    <div>
      <SidebarContainer></SidebarContainer>
    </div>
  );
};

export default Sidebar;
