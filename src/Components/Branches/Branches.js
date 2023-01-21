import React from "react";

import "./Branches.css";

const Branches = () => {
  return (
    <div id="branches">
      <div className="main_container">
        <div className="header">
          <h2>Our Branches</h2>
          <hr />
          <h2 className="famous">"Most famous Branches"</h2>
        </div>
        <div className="card_main">
          <div className="card_e">Mumbai</div>
          <div className="card_o">Banglore</div>
          <div className="card_e">Lucknow</div>
          <div className="card_o">London</div>
          <div className="card_e">Washington</div>
          <div className="card_o">Noida</div>
          <div className="card_e">Tokyo Tower</div>
          <div className="card_o">United</div>
          <div className="card_e">Serbia</div>
          <div className="card_o">Russia</div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
