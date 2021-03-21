import React from "react";

import ItemDetail from "./item-detial/item-detail.compnent";
import RentalDetails from "./rental-details/rental-details.component";

import "./cart-item.styles.scss";
import SHOP_DATA from "../../../data/shop.data";

const CartItem = () => {
  const cartItem = SHOP_DATA.tools.items[0];

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
