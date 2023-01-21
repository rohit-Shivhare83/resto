import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact_conatiner">
        <div className="contact">
          <div className="contact_body">
            <h2>Contact</h2>
            <hr />
            <div className="contact_card">
              <p>
                "Let us know what you think! Tell us what you think about our
                retaurant, our food, our recipes, or anything else that comes to
                mind. We are happy to answer any questions you have about our
                food or services, and welcome all your comments and suggestions"
              </p>
            </div>

            {/* Descript Of Contact */}
            <div className="desc_contact">
              <div className="desc_restaurant">
                <h3>Yummy Foods Restaurant</h3>
                <li className="address">
                  <a href="#">
                    <p>93 Local Highway</p>
                    Orleans, MA 02653
                  </a>
                </li>
                <li className="email">
                  <a href="#">
                    <p>yummyrestaurant@gmail.com</p>
                  </a>
                </li>
                <li className="phone">
                  <a href="#">
                    <p>508-255-3740</p>
                  </a>
                </li>
              </div>
              <div className="desc_shop">
                <h3>Yummy Foods Shop</h3>
                <li className="address">
                  <a href="#">
                    <p>4295 US-6</p>
                    Eastham, MA 02642
                  </a>
                </li>
                <li className="email">
                  <a href="#">
                    <p>yummyshop@gmail.com</p>
                  </a>
                </li>
                <li className="phone">
                  <a href="#">
                    <p>508-255-9446</p>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
