import React from "react";
import { useState, useEffect } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.price;
      setPrice(ans);
    });
  };
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="cart_main">
      <article>
        {cart?.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_dish">
              <p>{item.dish_name}</p>
            </div>
            <div className="inc_dec">
              <button
                className="inc_sign sign"
                onClick={() => handleChange(item, +1)}
              >
                +
              </button>
              <button className="cart_amount">{item.amount}</button>
              <button
                className="dec_sign sign"
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>
            </div>
            <div className="cart_price">
              <span>{item.price} Rs</span>
              <button
                className="remove_btn"
                onClick={() => {
                  if (item.length < 1) {
                    setPrice(0);
                  } else {
                    handleRemove(item.id);
                    setPrice("00");
                  }
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </article>
      <div className="total_cart">
        <span>Total Price of your Cart </span>
        <span>{price}</span>
      </div>
      <div className="placeOrderBtn">
        {cart.length == 0 ? (
          <h2>Your Cart Is Empty</h2>
        ) : (
          <Link to={"/Order/PlaceOrder"}>
            <button className="place_order_btn">Place Order</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
