import React from "react";
import { Wrapper } from "../styles/Login.styles";
import { useState } from "react";
import { useUserContext } from "../context/user_context";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    createUserWithEmailAndPassword,
    googleLogin,
    loading2,
    loading3,
    error2,
    error3,
  } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleLoginHandle = () => {
    googleLogin();
  };

  const submitRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
    if (error2 || error3) {
      console.log("error   occured");
    } else {
      navigate("/login");
    }
  };
  return (
    <Wrapper
      className="section section-center page-100"
      style={{ textAlign: "center" }}
    >
      <form onSubmit={submitRegister} className="form">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Link to="/login">Already have an account Login</Link>
        <br />
        <button type="submit" className="btn" disabled={loading2 || loading3}>
          Register
        </button>
        <br />
        <button className="btn" onClick={googleLoginHandle}>
          googleLogin
        </button>
      </form>
    </Wrapper>
  );
}

export default Login;
