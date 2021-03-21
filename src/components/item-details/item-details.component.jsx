import React from "react";
import { colors } from "../../constants/colors";

import { FaCheckCircle } from "react-icons/fa";
import PricingChip from "../common/pricing-chip/pricing-chip.component";
import ImageCarousel from "../item-card/image-carousel/image-carousel.component";
import { RUPEE_SYMBOL } from "../../constants/strings";

import "./item-details.styles.scss";

const ItemDetails = ({ item }) => {
  const {
    description,
    isBulkAvailable,
    images,
    name,
    pricePerDayInPaise,
    pricePerMonthInPaise,
    pricePerWeekInPaise,
    depositInPaise,
    deliveryPriceInPaise,
  } = item;

  return (
    <div className="item-details">
      <div className="images">
        <ImageCarousel images={images} />
      </div>
      <div className="product-details">
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        {isBulkAvailable && (
          <div className="bulk-order">
            <FaCheckCircle className="check" />
            Bulk order available
          </div>
        )}
        <h4 className="rent-details-text">rent details</h4>
        <div className="pricing-details">
          <PricingChip large perOf="Day" price={pricePerDayInPaise} />
          <PricingChip large perOf="Week" price={pricePerWeekInPaise} />
          <PricingChip large perOf="Month" price={pricePerMonthInPaise} />
        </div>
      </div>
      <div className="row">
        <div>
          <p>Refundable Deposit</p>
          <p>
            {RUPEE_SYMBOL} {depositInPaise / 100}/unit
          </p>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <p>Delivery & Pickup</p>
          <p style={{ color: colors.TURQUOISE }}>
            {deliveryPriceInPaise / 100}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
