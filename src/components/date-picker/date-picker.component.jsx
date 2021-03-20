import React, { useState } from "react";
import { colors } from "../../constants/colors";

import { DateRange } from "react-date-range";
import RentColumn from "./rent-column/rent-column.component";

import "./date-picker.styles.scss";

const DatePicker = () => {
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
        </div>
        <RentColumn days={numberOfDays(state[0].startDate, state[0].endDate)} />
      </div>
    </div>
  );
};

export default DatePicker;
