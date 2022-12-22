import React from "react";
import { Wrapper } from "../styles/Footer.styles";
const Footer = () => {
  return (
    <div>
      <Wrapper>
        <h5>Copyright &copy; easy-shop {new Date().getFullYear()} </h5>
      </Wrapper>
    </div>
  );
};

export default Footer;
