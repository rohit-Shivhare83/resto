import React from "react";

import logo from "../../Images/logo.png";
import Restaurantwithwoman from "../../Images/Restaurantwithwoman.png";
import { Link } from "react-router-dom";
// import Booking from "../Booking/Booking.js";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Navbar.css";

const navbar = () => {
  return (
    // <BrowserRouter>
    //   <Routes>

    <div>
      <div className="nav_container" id="home">
        <div className="navbar">
          {/* Left Navbar */}
          <div className="l_navbar">
            <nav className="nav_left">
              <ul type="none">
                <li>
                  <a href="#home">
                    <img id="logo" src={logo} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" id="yummy">
                    Yummy Foods
                  </a>
                </li>
                <li>
                  <a href="#" id="heaven">
                    Taste the Heaven
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Right Navbar */}
          <div className="r_navbar">
            <nav className="nav_right">
              <ul type="none">
                <li>
                  <a href="#home">Home</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>

                <li>
                  <a href="#branches">Our Branches</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* navbarbody */}
        <div className="navbar_body">
          <div className="nav_body_container">
            <div className="nav_b_content">
              <div className="l_body">
                <h1 className="caption">"Good Food Is Good Mood"</h1>
                <p className="para">
                  We welcome your appetite. Let our food satisfy your stomach.
                </p>
                <button className="btn_order">
                  <Link to={"Order"}>Order Your Food</Link>
                </button>
              </div>
              <div className="r_body">
                <a href="#">
                  <img src={Restaurantwithwoman} alt="#" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default navbar;
