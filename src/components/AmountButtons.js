import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Wrapper } from "../styles/AmountButtons.styles";

const AmountButtons = ({ id, amount, increase, decrease }) => {
  return (
    <Wrapper className="amount-btn">
      <button className="amount-btn" onClick={() => decrease(id)}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button className="amount-btn" onClick={() => increase(id)}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

export default AmountButtons;
