import React from "react";
import "./PlaceOrder.css";
import wave2 from "../../Images/wave2.svg";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const PlaceOrder = () => {
  const navigate = useNavigate();
  // const [sub, setSub] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/Order/PlaceOrder/Confirm");
  };

  return (
    <div className="placeorder">
      <div className="img_back">
        <img src={wave2} alt="back" />
      </div>

      <h1 className="order_head">Place Your Order</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="f_name ">
          <label htmlFor="name " className="form_label">
            Name*
          </label>
          <input
            className="input"
            type="text"
            name="first_name"
            placeholder="First Name"
            id="first_name"
            required
          />
          <input
            className="input"
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Second Name"
            required
          />
        </div>
        <div className="f_email ">
          <label htmlFor="email" className="form_label">
            Email*
          </label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter You Email"
            required
          />
        </div>
        <div className="f_phone ">
          <label htmlFor="phone">Phone*</label>
          <input
            className="input"
            type="number"
            name="number"
            id="number"
            maxLength="10"
            minLength="10"
            placeholder="Enter Your Phone Number"
            required
          />
        </div>
        <div className="f_address ">
          <label htmlFor="address">Address*</label>
          <textarea
            className="input"
            name="address"
            id="address"
            rows="2"
            cols="2"
            placeholder="Enter Your Address"
            maxLength="100"
            required
          ></textarea>
        </div>
        <div className="f_pincode ">
          <label htmlFor="pincode">Pincode*</label>
          <input
            className="input"
            type="number"
            name="pin_number"
            id="pin_number"
            maxLength="6"
            minLength="6"
            placeholder="Enter Your Pincode"
            required
          />
        </div>
        <hr className="form_hr" />
        <div className="submit_button">
          <button className="submit_btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
