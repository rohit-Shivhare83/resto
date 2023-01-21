import React from "react";
import "./Cards.css";

const Cards = ({ item, handleClickCart }) => {
  return (
    <div className="cards">
      <div className="menu_container">
        <div className="menu_title">
          <h3 className="menu_name">{item.dish_name}</h3>
          <h4 className="menu_rating">rating : {item.rating} </h4>
        </div>

        <div className="menu_price">
          <h3 className="price">{item.price}</h3>
          <i className="fa-solid fa-indian-rupee-sign"></i>
        </div>
        <div className="addtocart_btn">
          <button className="card_btn" onClick={() => handleClickCart(item)}>
            Add To Cart
            <span></span>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Cards;
