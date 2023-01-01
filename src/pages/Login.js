import React from "react";
import { Wrapper } from "../styles/Login.styles";
import { useState } from "react";
import { useUserContext } from "../context/user_context";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../components";
import { FaGoogle } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const {
    emailPasswordLogin,
    googleLogin,
    loading,
    loading2,
    error2,
    error,
    user,
    user2,
  } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = loading || loading2;
  const IsError = error || error2;
  const submitLogin = (e) => {
    e.preventDefault();
    emailPasswordLogin(email, password);
  };
  if (user || user2) {
    navigate("/");
  }
  if (isLoading) {
    return <Loading />;
  }

  const googleLoginHandle = () => {
    googleLogin();
  };

  return (
    <Wrapper
      className="section section-center page-100"
      style={{ textAlign: "center" }}
    >
      <form onSubmit={submitLogin} className="form">
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
        <p className="link">
          Don't have anccount
          <span className="login">
            <Link to="/register"> register</Link>
          </span>
        </p>

        <br />
        <button type="submit" className="btn">
          Login
        </button>
        <br />
        <button className="btn" onClick={googleLoginHandle}>
          <FaGoogle />
        </button>
        {IsError && <p>An error occured</p>}
      </form>
    </Wrapper>
  );
}

export default Login;
