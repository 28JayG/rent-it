import React from "react";
import { colors } from "../../../constants/colors";
import { FaCheckCircle } from "react-icons/fa";

import "./step.styles.scss";

const Step = ({ active, number, label, completed }) => (
  <div
    className={`step ${active ? "step__active" : ""} ${
      completed ? "step__complete" : ""
    }`}
  >
    {!completed ? (
      <div className="bullet">{number}</div>
    ) : (
      <FaCheckCircle className="check"/>
    )}
    <span className="name">{label}</span>
  </div>
);

export default Step;
