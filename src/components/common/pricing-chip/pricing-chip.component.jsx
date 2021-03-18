import React from "react";

import "./pricing-chip.styles.scss";

const PricingChip = ({ perOf, price }) => {
  //price will be in paise
  return (
    <div className="price-chip">
      ₹ {price / 100}/{perOf}
    </div>
  );
};

export default PricingChip