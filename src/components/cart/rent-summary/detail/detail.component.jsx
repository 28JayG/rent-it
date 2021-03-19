import React from "react";
import { RUPEE_SYMBOL } from "../../../../constants/strings";
import { colors } from "../../../../constants/colors";

import "./detail.styles.scss";

const Detail = ({ title, amount, negative }) => (
  <div className="detail">
    <p className="point">{title}</p>
    <p
      className="price"
      style={{ color: negative ? colors.TURQUOISE : colors.ARK_TWOD }}
    >
      {negative && "-"} {RUPEE_SYMBOL} {amount}
    </p>
  </div>
);

export default Detail;
