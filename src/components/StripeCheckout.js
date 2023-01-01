import React, { useState, useEffect } from "react";
import { Wrapper } from "../styles/StripeCheckout.styles";
import { loadStripe } from "@stripe/stripe-js";

import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { useHistory } from "react-router-dom";
import {
  LinkAuthenticationElement,
  PaymentElement,
} from "@stripe/react-stripe-js/dist/react-stripe";

const promise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);

const CheckoutForm = () => {
  const { cart, totalAmount, shippingFee } = useCartContext();
  // const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialised",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const createPayment = async () => {
    console.log("hello");
  };

  useEffect(() => {
    createPayment();
  }, []);
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div>
      <form id="payment-form" onClick={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        ></CardElement>
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "pay"}
          </span>
        </button>
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          payment succeed
        </p>
      </form>
    </div>
  );
};
const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

export default StripeCheckout;
