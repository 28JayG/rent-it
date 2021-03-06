import React, { useState } from "react";
import { colors } from "../../constants/colors";

import { DateRange } from "react-date-range";
import { MdLocalOffer } from "react-icons/md";
import RentColumn from "./rent-column/rent-column.component";

import "./calender-theme/default.css";
import "./calender-theme/styles.css";
import "./date-picker.styles.scss";

const DatePicker = ({ item }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const numberOfDays = (startDate, endDate) =>
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

  return (
    <div className="date-picker">
      <p>Start Booking</p>
      <div className="calender-container">
        <div>
          <DateRange
            className="calender"
            minDate={new Date()}
            rangeColors={[colors.TURQUOISE]}
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
          <div className="surge">
            <p className="is-on">
              <span className="red-dot" />
              Rent is on Surge
            </p>
            <p className="surge-by">Rent is on Surge by 1.2 times</p>
          </div>
          <div className="offer">
            <div className="offer-text">
              <MdLocalOffer color={colors.TURQUOISE} />
              <p>OFFER:</p>
            </div>
            <span className="what-offer">
              Earn 200 loyalty points by renting in this product
            </span>
          </div>
        </div>
        <RentColumn
          item={item}
          days={numberOfDays(state[0].startDate, state[0].endDate)}
        />
      </div>
    </div>
  );
};

export default DatePicker;
