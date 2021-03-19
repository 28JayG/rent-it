import React from "react";
import { RUPEE_SYMBOL } from "../../../../constants/strings";
import { colors } from "../../../../constants/colors";

import ItemDetail from "./item-detial/item-detail.compnent";

import "./cart-item.styles.scss";
import RentalDetails from "./rental-details/rental-details.component";

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
