import React from "react";
import { useState } from "react";

import Voucher from "../../Images/Voucher.png";

import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const validation = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(email)) {
      setMsg("");
      setSuccess(true);
    } else if (!regex.test(email) && email !== "") {
      setMsg("Email is not valid");
    } else {
      setMsg("please... provide your email...!!");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };
  const remove = () => {
    setSuccess(false);
  };

  return (
    <div className="footer">
      <div className="footer_container">
        <div className="detail_container">
          <div className="left">
            <h4>Get News, Info & More! </h4>

            {/* ------------------------- */}
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleChange}
              required
            />
            <br />

            <p className="danger">{msg}</p>
            {success ? (
              <p className="email_success">
                Succesfull..!!
                <span onClick={remove}>
                  <i class="fa-solid fa-trash"></i>
                </span>
              </p>
            ) : (
              ""
            )}
            <br />
            <button
              onClick={validation}
              onBlur={() => {
                setEmail("");
                setMsg("");
              }}
            >
              Subscribe
            </button>

            {/* -------------------------- */}
          </div>
          <div className="center">
            <h4>Gift and Voucher</h4>
            <img className="detail_img" src={Voucher} alt="" />
          </div>
          <div className="right ">
            <h4>Restaurant Photo Gallary</h4>
            <img
              className="detail_img"
              src="https://elchico.in/wp-content/uploads/2022/02/veggiepage.jpg"
              alt="#Restaurant"
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &#169; 2022 All Right Reserved | Build By Rohit Shivhare | Made with
          Love
        </p>
      </div>
    </div>
  );
};

export default Footer;
