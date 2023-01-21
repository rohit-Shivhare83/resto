import React from "react";
// import { Link } from "react-router-dom";
// import "./OrderFoodNavbar.css";
import "./OrderFoodNavbar.css";

const OrderFoodNavbar = ({ size, setShow }) => {
  return (
    <div>
      <div className="booking_main">
        <div className="booking_menu">
          {/* <Link to={"/order"}> */}
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => {
              setShow(true);
            }}
          ></i>
          {/* </Link> */}

          <h4>Select Your Menu</h4>
        </div>
        <div
          className="cart_icon"
          onClick={() => {
            if (size >= 1) {
              setShow(false);
              
            } else {
              setShow(true);
            }
          }}
        >
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodNavbar;
