import React from "react";

import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/images/brand-logo.png";
import Cart from "../../assets/images/cart.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className='after-small'>
          <FiMenu className="menu-button" />
          <div className="logo-container">
            <img src={Logo} alt="brand logo" />
          </div>
        </div>
        <ul>
          <li>Hi Jason</li>
          <li>
            <img src={Cart} alt="cart" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
