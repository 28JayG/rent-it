import React from "react";

import "./categories-panel.styles.scss";
import CategoryTile from "./category-tile/category-tile.component";

const CategoriesPanel = () => {
  return (
    <div className="categories-panel">
      <div className="heading">
        <h4>Categories</h4>
        <hr />
      </div>
      <div className="category-list">
        <CategoryTile category={'category'} />
        <div className="indicator" />
      </div>
    </div>
  );
};

export default CategoriesPanel;
