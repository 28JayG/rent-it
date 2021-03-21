import React from "react";
import { connect } from "react-redux";

import Cart from "../../components/cart/cart.component";
import Stepper from "../../components/stepper/stepper.component";
import { EMPTY_CART_IMAGE_URL } from "../../constants/paths";

import "./purchase.styles.scss";

const Purchase = ({ itemsCount }) => {
  return itemsCount > 0 ? (
    <section className="purchase">
      <div className="order-steps">
        <Stepper />
      </div>
      <Cart />
    </section>
  ) : (
    <div className="empty-cart">
      <div className="empty-cart-image">
        <img src={EMPTY_CART_IMAGE_URL} alt="" />
      </div>
      <h1>Your Cart seems Empty</h1>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  itemsCount: cart.itemsCount,
});

export default connect(mapStateToProps)(Purchase);
