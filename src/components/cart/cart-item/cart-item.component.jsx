import React from "react";

import ItemDetail from "./item-detial/item-detail.compnent";
import RentalDetails from "./rental-details/rental-details.component";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  return (
    <div className="cart-item">
      <ItemDetail item={cartItem} />
      <RentalDetails cartItem={cartItem} />
      <div className="icons-row">
        <span>&#9998;</span>
        <span>&#10005;</span>
      </div>
    </div>
  );
};

export default CartItem;
