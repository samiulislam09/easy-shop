import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
import { Wrapper } from "../styles/AddToCart.styles";
const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [mainColor, setMinColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldValue) => {
      let newValue = oldValue + 1;
      if (newValue > stock) {
        newValue = stock;
      }
      return newValue;
    });
  };
  const decrease = () => {
    setAmount((oldValue) => {
      let newValue = oldValue - 1;
      if (newValue < 1) {
        newValue = 1;
      }
      return newValue;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>Colors:</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`color-btn ${mainColor === color && "active"}`}
                style={{ backgroundColor: `${color}` }}
                onClick={() => setMinColor(color)}
              ></button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
