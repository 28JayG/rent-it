import React from "react";

import "./step.styles.scss";

const Step = ({ active, number, label }) => (
  <div className={`step ${active ? "step__active" : ""}`}>
    <div className="bullet">{number}</div>
    <span className="name">{label}</span>
  </div>
);

export default Step;
