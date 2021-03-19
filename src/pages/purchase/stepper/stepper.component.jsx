import React from "react";

import Step from "./step/step.component";

import "./stepper.styles.scss";

const Stepper = ({ activeStep, completedSteps }) => {
  return (
    <div className="stepper-container">
      <Step number={1} label="Cart" />
      <hr className="step-connector" />
      <Step number={2} label="Delivery Address" />
      <hr className="step-connector" />{" "}
      <Step number={3} label="Payment Options" />
      <hr className="step-connector" />
      <Step number={4} label="Order Confirmation" />
    </div>
  );
};

export default Stepper;
