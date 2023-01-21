import React from "react";
import { Link } from "react-router-dom";
import "./Confirmed.css";

const Confirmed = () => {
  return (
    <div className="confirm_main">
      <div className="confirm_title">
        <h1>Order Confirmed!!!!</h1>
      </div>
      <div className="confirm_img">
        <img
          src="https://1.bp.blogspot.com/-Xl0Yq2kgjRI/YKKb2xT2KxI/AAAAAAAAHSM/NyuqI44vugkIidjOqpDqYBPhMZmbFF80QCNcBGAsYHQ/w499-h499/3529856-removebg.png"
          alt="confirm_order"
        />
      </div>
      <div className="confirm_content">
        <h1>Your Order will be delivered within 30 minutes</h1>
        <p>Thank You for shopping with us.</p>
      </div>
      <div className="confirm_continue">
        <Link type="none" to={"/"}>
          <button className="confirm_btn">
            Back to home
            <span></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmed;

// src ="https://1.bp.blogspot.com/-Xl0Yq2kgjRI/YKKb2xT2KxI/AAAAAAAAHSM/NyuqI44vugkIidjOqpDqYBPhMZmbFF80QCNcBGAsYHQ/w499-h499/3529856-removebg.png";
