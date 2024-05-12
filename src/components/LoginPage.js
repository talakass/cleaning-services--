import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cookies from "js-cookie";
import axios from "axios";
import "./LoginPage.css";
import logoOne from "../images/logo-one.jpg";



const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the login endpoint
      const response = await axios.post("http://localhost:5000/api/customer/login", {
        email,
        password,
      });
      cookies.set("token", response.data.token, { expires: 70 });
      window.localStorage.setItem("email", JSON.stringify(email));
      window.localStorage.setItem("status", JSON.stringify("customer"));

    } catch (error) {
      // Handle errors here
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img className="logo" src={logoOne} alt="logo" />
        </div>

        <form className="login-form" onSubmit={handleLoginFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        <p className="login-text">
          Don't have an account?{" "}
          <Link to="/signup" className="login-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
