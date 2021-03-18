import React, { useState } from "react";

import "./categories-panel.styles.scss";
import CategoryTile from "./category-tile/category-tile.component";

const CategoriesPanel = () => {
  const [topValue, setTopValue] = useState(0);
  
  const handleClick = (e) => {
    setTopValue(e.target.offsetTop);
  };

  return (
    <div className="categories-panel">
      <div className="heading">
        <h4>Categories</h4>
        <hr />
      </div>
      <div className="category-list">
        <CategoryTile onClick={handleClick} category={"category"} />
        <div className="indicator" style={{ top: topValue }} />
      </div>
    </div>
  );
};

export default CategoriesPanel;
