import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import axios from "axios";
import "./SignupPage.css";


const SignupPage = () => {
  const navigat = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSignupFormSubmit = async (e) => {
    e.preventDefault();
    var name = firstName + " " + lastName;

    try {
      // Send POST request to the login endpoint
      const response = await axios.post("http://localhost:5000/api/customer", {
        name,
        email,
        password,
        phoneNumber,
        address,
      });
      cookies.set("token", response.data.token, { expires: 70 });
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("address", JSON.stringify(address));
      navigat("/")
      console.log("Response:", response.data.data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Create an Account</h2>
        <form className="signup-form" onSubmit={handleSignupFormSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            className="signup-input"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            className="signup-input"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="signup-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="signup-input"
            required
          />
          <input
            type="text"
            placeholder="address"
            value={address}
            onChange={handleAddressChange}
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="signup-text">
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
