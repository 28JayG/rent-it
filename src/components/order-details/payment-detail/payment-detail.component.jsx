import React from "react";

import "./payment-detail.styles.scss";

const PaymentDetail = ({ title, value }) => (
  <p className="title-key">
    {title} - <span className="value">{value}</span>
  </p>
);

export default PaymentDetail;
