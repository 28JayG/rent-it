import React from "react";
import CategoriesPanel from "../../components/categories-panel/categories-panel.component";
import ItemCard from "../../components/item-card/item-card.component";
import SHOP_DATA from "../../data/shop.data";

import "./search.styles.scss";

const Search = () => {
  const item = SHOP_DATA.tools.items[0];

  return (
    <div className="search-screen">
      <div className="categories">
        <CategoriesPanel />
      </div>
      <div className="search-results">
        <ItemCard item={item} />
        <ItemCard item={item} />
        <ItemCard item={item} />
        <ItemCard item={item} />
      </div>
    </div>
  );
};

export default Search;
