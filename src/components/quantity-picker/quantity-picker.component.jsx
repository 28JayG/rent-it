import React, { useState } from "react";

import "./quantity-picker.styles.scss";

const QuantityPicker = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="quantity-picker">
      <p>Quantity</p>
      <div className="toggle-quantity">
        <span
          className="button"
          onClick={() => count > 0 && setCount(count - 1)}
        >
          &#8722;
        </span>
        <span className="count">{count}</span>
        <span
          className="button"
          onClick={() => count < 5 && setCount(count + 1)}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default QuantityPicker;
