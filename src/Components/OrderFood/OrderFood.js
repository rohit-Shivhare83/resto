import React from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import OrderFoodNavbar from "../OrderFoodNavbar/OrderFoodNavbar";
import OrderList from "../OrderList/OrderList";
import "./OrderFood.css";

const OrderFood = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClickCart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      // alert("Already Added To Cart");
      return;
    }
    setCart([...cart, item]);
    // console.log(cart, item);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <>
      <div className="order_food">
        <OrderFoodNavbar size={cart.length} setShow={ setShow} />
        {
          <div className="warning">
            {warning && (
              <div className="warning">Item is already added to your cart</div>
            )}
          </div>
        }

        {show ? (
          <OrderList handleClickCart={handleClickCart} />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )}
      </div>
    </>
  );
};

export default OrderFood;
