import React from "react";

import { RUPEE_SYMBOL } from "../../../constants/strings";

import "./rent-column.styles.scss";

const RentColumn = ({ days, item }) => {
  const { pricePerDayInPaise, depositInPaise, deliveryPriceInPaise } = item;

  const noOfDays = days > 0 ? days : 1;

  return (
    <div className="renting">
      <div className="days-count">
        No of days: <span className="days">{noOfDays}</span>
      </div>
      <div className="rent">
        <div>
          <p>Rent:</p>
          <div className="rent-total">
            {RUPEE_SYMBOL}{" "}
            {(noOfDays * (pricePerDayInPaise + depositInPaise) +
              deliveryPriceInPaise) /
              100}
          </div>
        </div>

        <div>
          <div className="breakage">
            <p className="b-title">
              Refundable
              <br />
              Deposit:
            </p>
            <span className="b-price">
              {RUPEE_SYMBOL} {depositInPaise / 100}
            </span>
          </div>
          <div className="breakage">
            <p className="b-title">
              Delivery &
              <br />
              Pickup:
            </p>
            <span className="b-price">
              {RUPEE_SYMBOL} {deliveryPriceInPaise / 100}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentColumn;
