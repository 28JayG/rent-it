import React from "react";
import useWindowSize from "../../hooks/use-window-size.hook";

import Step from "./step/step.component";

import "./stepper.styles.scss";

const Stepper = ({ activeStep = 1, completedSteps = 0 }) => {
  const windowSize = useWindowSize();

  const getStepLabel = (activeStep) => {
    switch (activeStep) {
      case 1:
        return "Cart";
      case 2:
        return "Delivery Address";
      case 3:
        return "Payment Options";
      case 4:
        return "Order Confirmation";
    }
  };

  return windowSize.width > 992 ? (
    <div className="stepper-container">
      <Step
        completed={completedSteps >= 1}
        active={activeStep === 1}
        number={1}
        label="Cart"
      />
      <div
        className={`step-connector ${
          completedSteps >= 1 ? "connector__active" : ""
        }`}
      >
        ——————
      </div>
      <Step
        completed={completedSteps >= 2}
        active={activeStep === 2}
        number={2}
        label="Delivery Address"
      />
      <div
        className={`step-connector ${
          completedSteps >= 2 ? "connector__active" : ""
        }`}
      >
        ——————
      </div>
      <Step
        completed={completedSteps >= 3}
        active={activeStep === 3}
        number={3}
        label="Payment Options"
      />
      <div
        className={`step-connector ${
          completedSteps >= 3 ? "connector__active" : ""
        }`}
      >
        ——————
      </div>
      <Step
        completed={completedSteps >= 4}
        active={activeStep === 4}
        number={4}
        label="Order Confirmation"
      />
    </div>
  ) : (
    <div className="stepper-container">
      <Step active number={activeStep} label={getStepLabel(activeStep)} />
    </div>
  );
};

export default Stepper;
