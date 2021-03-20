import React from "react";

import "./pricing-chip.styles.scss";

const PricingChip = ({ perOf, price, large }) => {
  //price will be in paise
  return (
    <div className={`price-chip ${large ? "large" : ""}`}>
      ₹ {price / 100}/{perOf}
    </div>
  );
};

export default PricingChip;
