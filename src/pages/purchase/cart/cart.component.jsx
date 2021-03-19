import React from "react";
import {RUPEE_SYMBOL} from '../../../constants/strings';

import CartItem from "./cart-item/cart-item.component";

import "./cart.styles.scss";

class Cart extends React.Component {
  render() {
    return (
      <section className="cart-section">
        <div className="cart-items">
          <div className="rent-total-items-row">
            <h2 className="my-cart">
              <strong>My Cart</strong> - 1 items
            </h2>
            <h2 className="my-cart">
              Total Rent:
              <strong>{` ${RUPEE_SYMBOL}`} 4000</strong>
            </h2>
          </div>
          <CartItem />
        </div>
      </section>
    );
  }
}

export default Cart;
