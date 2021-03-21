import React from "react";

import "./item-detail.styles.scss";

const ItemDetail = ({ item }) => (
  <div className="item">
    <div className="image">
      <img src="" alt="" />
    </div>
    <div className="detail-column">
      <p className="name">Macbook Pro 16 GB RAM </p>
      <div style={{ height: '10px'}}/>
      <span className="quantity">
        Quantity: <strong style={{ color: "black" }}>2</strong>
      </span>
    </div>
  </div>
);

export default ItemDetail;