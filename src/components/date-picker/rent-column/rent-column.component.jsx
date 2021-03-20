import React from "react";

import { RUPEE_SYMBOL } from "../../../constants/strings";

import "./rent-column.styles.scss";

const RentColumn = ({ days }) => (
  <div className="renting">
    <div className="days-count">
      No of days: <span className="days">{days}</span>
    </div>
    <div className="rent">
      <div>
        <p>Rent:</p>
        <div className="rent-total">{RUPEE_SYMBOL} 6000</div>
      </div>
      
      <div>
        <div className="breakage">
          <p className="b-title">
            Refundable
            <br />
            Deposit:
          </p>
          <span className="b-price">{RUPEE_SYMBOL} 4000</span>
        </div>
        <div className="breakage">
          <p className="b-title">
            Delivery &
            <br />
            Pickup:
          </p>
          <span className="b-price">{RUPEE_SYMBOL} 600</span>
        </div>
      </div>
    </div>
  </div>
);

export default RentColumn;
