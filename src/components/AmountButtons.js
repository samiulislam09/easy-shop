import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Wrapper } from "../styles/AmountButtons.styles";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <Wrapper className="amount-btn">
      <button className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

export default AmountButtons;
