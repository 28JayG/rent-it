import React from "react";
import { colors } from "../../../../constants/colors";
import { RUPEE_SYMBOL } from "../../../../constants/strings";

import "./rental-details.styles.scss";

const RentalDetails = ({ cartItem }) => {
  const {
    description,
    isBulkAvailable,
    images,
    name,
    category,
    pricePerDayInPaise,
    pricePerMonthInPaise,
    pricePerWeekInPaise,
    depositInPaise,
    deliveryPriceInPaise,
  } = cartItem;
  return (
    <div className="rental-details">
      <div className="rental-detail">
        <p className="title">Refundable Deposit</p>
        <p className="deposit" style={{ color: colors.TURQUOISE }}>
          {RUPEE_SYMBOL}
          {depositInPaise / 100}
        </p>
      </div>
      <div className="rental-detail">
        <p className="title">Delivery & Pickup</p>
        <p className="deposit" style={{ color: colors.TURQUOISE }}>
          {RUPEE_SYMBOL}
          {deliveryPriceInPaise / 100}
        </p>
      </div>
      <div className="rental-detail">
        <p className="title">Rent</p>
        <p className="deposit">{RUPEE_SYMBOL}6000</p>
      </div>
      <div className="rental-detail">
        <p className="title">Rental Period</p>
        <p className="deposit">6 Dec’17 - 12 Dec’17</p>
      </div>
      <div className="rental-detail">
        <p className="title">Days</p>
        <p className="deposit">7</p>
      </div>
    </div>
  );
};

export default RentalDetails;
