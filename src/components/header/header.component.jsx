import React, { useState } from "react";
import useWindowSize from "../../hooks/use-window-size.hook";
import { connect } from "react-redux";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/images/brand-logo.png";
import Cart from "../../assets/images/cart.png";
import CategoriesPanel from "../../components/categories-panel/categories-panel.component";

import "./header.styles.scss";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../constants/routes";

const Header = ({ cartItemsCount }) => {
  const [categoriesHidden, setCategoriesHidden] = useState(true);
  const windowSize = useWindowSize();

  const toggleCategoriesHidden = () => setCategoriesHidden(!categoriesHidden);
  console.log(cartItemsCount);

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="after-small">
          <FiMenu className="menu-button" onClick={toggleCategoriesHidden} />
          <Link to={AppRoutes.HOME}>
            <div className="logo-container">
              <img src={Logo} alt="brand logo" />
            </div>
          </Link>
        </div>
        <ul>
          <li>Hi Jason</li>
          <li>
            <Link to={AppRoutes.CART}>
              <div className="cart-icon">
                <img src={Cart} alt="cart" className="image" />
                {cartItemsCount > 0 && (
                  <div className="cart-item-count">{cartItemsCount}</div>
                )}
              </div>
            </Link>
          </li>
        </ul>
        {windowSize.width <= 992 && !categoriesHidden && <CategoriesPanel />}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItemsCount: cart.itemsCount,
});

export default connect(mapStateToProps)(Header);
