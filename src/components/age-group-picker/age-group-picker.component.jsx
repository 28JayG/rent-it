import React from "react";

import "./age-group-picker.styles.scss";

const AgeGroupPicker = () => {
  return (
    <div className="age-picker">
      <p>Select Age Group</p>
      <div className="dropdown">
        <select>
          <option value="0">2-3 years</option>
          <option value="1">20-25 years</option>
          <option value="2">10-15 years</option>
          <option value="3">30-40 years</option>
        </select>
      </div>
    </div>
  );
};

export default AgeGroupPicker;
