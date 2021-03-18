import React from "react";

import "./category-tile.styles.scss";

const CategoryTile = ({ category, ...otherProps }) => (
  <div className="category-tile" {...otherProps}>
    {category}
  </div>
);

export default CategoryTile;
