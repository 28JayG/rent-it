import React, { useState } from "react";
import { Router, useHistory } from "react-router";
import { RUPEE_SYMBOL } from "../../../constants/strings";
import { AppRoutes } from "../../../constants/routes";

import CustomButton from "../../custom-button/custom-button.component";
import Detail from "./detail/detail.component";
import LoyaltyPoints from "./loyalty-points/loyalty-points.component";

import "./rent-summary.styles.scss";

const RentSummary = ({ rentDetails }) => {
  const [hideDetails, setHideDetails] = useState(false);
  const history = useHistory();

  const toggleHideDetails = () => setHideDetails(!hideDetails);

  return (
    <div className="rent-summary">
      <h3>Rent Summary</h3>
      {!hideDetails && (
        <div className="details">
          <Detail title="total rent" amount={6000} />
          <Detail title="Total Refundable Deposit" amount={4000} />
          <Detail title="Delivery & Pickup" amount={600} />
          <Detail title="Discount" amount={100} negative />
        </div>
      )}
      <LoyaltyPoints amount={100} />
      <div className="enter-cupon">
        <p className="text">Have any Coupon?</p>
        <span className="code-here">Enter Code here</span>
      </div>
      <div className="total">
        <p className="text">
          Total Payable <wbr /> Amount
        </p>
        <span className="total-amount">{RUPEE_SYMBOL} 10400</span>
      </div>
      <p className="toggle-details" onClick={toggleHideDetails}>
        {hideDetails ? "Show details" : "Hide details"}
      </p>
      <CustomButton
        onClick={() => history.push(AppRoutes.ORDER_CONFIRMATION)}
        fullWidth
      >
        checkout
      </CustomButton>
    </div>
  );
};

export default RentSummary;
