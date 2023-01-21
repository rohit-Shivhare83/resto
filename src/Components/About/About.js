import React from "react";

import sitting from "../../Images/sitting.png";

import "./About.css";

const About = () => {
  return (
    <div>
      <div className="container" id="about">
        <div className="about">
          <h2>About us</h2>
          <hr />
          <div className="about_head ">
            <h2>
              <p>"Our Restaurant Is Committed"</p>
              <p>"Earning Your Trust By Providing The Expertise"</p>
            </h2>
          </div>
          <div className="about_content">
            {/* grid 1 */}
            <div className="info grid1">
              <h4>Yummy Foods</h4>
              <p>
                &nbsp; &nbsp; &nbsp; Founded in 2022, Menufy offers mobile and
                online meal ordering capabilities to restaurants in thousands of
                cities in the India. Menufy provides digital menus on websites
                and in its app, from which customers can securely pay with the
                most options available out of all restaurant e-commerce systems.
              </p>
            </div>

            {/* grid 2 */}
            <div className="leader grid2">
              <h4>Leaders</h4>
              {/* <p> */}
              <ul type="none">
                <li>
                  President And CEO <br /> - Rohit Shivhare
                </li>
                <li>
                  Director of Technology <br /> - Sagar Maurya
                </li>
                <li>
                  Director of Client Services <br /> - Anurag Gautam
                </li>
                <li>
                  Director of Business Development <br /> - Adarsh Maurya
                </li>
                <li>
                  Director of Marketing <br /> - Manoj Pal
                </li>
              </ul>
              {/* </p>   */}
            </div>

            {/* grid 3 */}
            <div className="img_background grid3">
              <img id="img_back" src={sitting} alt="#" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
