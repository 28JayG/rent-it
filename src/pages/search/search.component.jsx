import React from "react";
import CategoriesPanel from "../../components/categories-panel/categories-panel.component";
import ItemCard from "../../components/item-card/item-card.component";

import "./search.styles.scss";

const Search = () => {
  return (
    <div className="search-screen">
      <div className='categories'>
        <CategoriesPanel />
      </div>
      <div className="search-results">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default Search;
