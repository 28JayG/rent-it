import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, fullWidth, ...otherButtonProps }) => {
  return (
    <button
      className={`custom-button ${fullWidth ? "full-width" : ""}`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
