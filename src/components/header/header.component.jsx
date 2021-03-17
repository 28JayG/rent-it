import React from "react";

import Logo from "../../assets/images/brand-logo.png";
import Cart from "../../assets/images/cart.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="brand logo" />
      </div>
      <ul>
        <li>Hi Jason</li>
        <li>
          <img src={Cart} alt="cart" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
