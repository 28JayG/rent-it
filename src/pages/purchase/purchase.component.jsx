import React from "react";

import Cart from "../../components/cart/cart.component";
import Stepper from "../../components/stepper/stepper.component";

import "./purchase.styles.scss";

const Purchase = () => {
  return (
    <section className="purchase">
      <div className="order-steps">
        <Stepper />
      </div>
      <Cart />
    </section>
  );
};

export default Purchase;
