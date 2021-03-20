import React from "react";
import {colors} from '../../constants/colors';

import { FaCheckCircle } from "react-icons/fa";
import PricingChip from "../common/pricing-chip/pricing-chip.component";
import ImageCarousel from "../item-card/image-carousel/image-carousel.component";
import { RUPEE_SYMBOL } from "../../constants/strings";

import "./item-details.styles.scss";

const ItemDetails = () => {
  return (
    <div className="item-details">
      <div className="images">
        <ImageCarousel />
      </div>
      <div className="product-details">
        <h2 className="name">Single</h2>
        <p className="description">
          Single door fridge or refrigerator 190 Ltrs near new condition with
          fast and effective cooling system to keep your food fresh available on
          rent in Bangalore
        </p>
        <div className="bulk-order">
          <FaCheckCircle className="check" />
          Bulk order available
        </div>
        <h4 className="rent-details-text">rent details</h4>
        <div className="pricing-details">
          <PricingChip large perOf="Day" price="50000" />
          <PricingChip large perOf="Week" price="63000" />
          <PricingChip large perOf="Month" price="150000" />
        </div>
      </div>
      <div className="row">
        <div>
          <p>Refundable Deposit</p>
          <p>{RUPEE_SYMBOL} 2000/unit</p>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <p>Delivery & Pickup</p>
          <p style={{color: colors.TURQUOISE}}>600</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
