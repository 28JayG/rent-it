import React, { useState } from "react";
import useWindowSize from "../../hooks/use-window-size.hook";

import CategoryTile from "./category-tile/category-tile.component";

import "./categories-panel.styles.scss";

const CategoriesPanel = () => {
  const [topValue, setTopValue] = useState(0);
  const windowSize = useWindowSize();

  const handleClick = (e) => {
    setTopValue(e.target.offsetTop);
  };

  return (
    <div className="categories-panel">
      {windowSize.width <= 992 && (
        <div className="search-field-container">
          <input type="text" placeholder="Seacrh Here..." />
        </div>
      )}
      {windowSize.width <= 992 && (
        <div className="heading user">
          <h4>Hi Jason</h4>
          <hr />
          <p>Orders</p>
          <p>Edit Profile</p>
        </div>
      )}
      <div className="heading">
        <h4>Categories</h4>
        <hr />
      </div>
      <div className="category-list">
        <CategoryTile onClick={handleClick} category={"Tools on Rent"} />
        <CategoryTile onClick={handleClick} category={"Medical Supplies"} />
        <CategoryTile onClick={handleClick} category={"Office Equipment"} />
        <CategoryTile onClick={handleClick} category={"Kids Costume"} />
        <CategoryTile onClick={handleClick} category={"Event Rentals"} />
        <CategoryTile onClick={handleClick} category={"Bedding"} />
        <div className="indicator" style={{ top: topValue }} />
      </div>
    </div>
  );
};

export default CategoriesPanel;
