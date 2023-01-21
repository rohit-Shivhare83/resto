import React from "react";
import list from "../../data.js";
import Cards from "../Cards/Cards";
import "./OrderList.css";
import { Scrollbars } from "react-custom-scrollbars-2";

const OrderList = ({ handleClickCart }) => {
  return (
    <>
      <div className="order_list">
        <h4>Select Your Menu</h4>
        <hr className="menu_hr" />
        <Scrollbars>
          {list.map((item) => {
            return (
              <Cards
                key={item.id}
                item={item}
                handleClickCart={handleClickCart}
              />
            );
          })}
        </Scrollbars>
      </div>
    </>
  );
};

export default OrderList;
