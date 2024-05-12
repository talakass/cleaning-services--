import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import "./App.css";
import Page1 from "./pages/Page1";
import NotFound from "./components/NotFound";
import CheckOut from "./components/CheckOut";
import Booking from "./components/Booking";



const auth = localStorage.getItem("email")


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {auth ? (<><Route path="/tala" element={<SignupPage />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Booking/:id" element={<Booking />} /></>) : (<></>)}
        <Route path="/*" element={<NotFound />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;