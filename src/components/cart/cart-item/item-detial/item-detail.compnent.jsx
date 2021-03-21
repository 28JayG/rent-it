import React from "react";

import "./item-detail.styles.scss";

const ItemDetail = ({ item }) => {
  const { images, name } = item;

  return (
    <div className="item">
      <div className="image">
        <img src={images[0]} alt="" />
      </div>
      <div className="detail-column">
        <p className="name">{name}</p>
        <div style={{ height: "10px" }} />
        <span className="quantity">
          Quantity: <strong style={{ color: "black" }}>2</strong>
        </span>
      </div>
    </div>
  );
};

export default ItemDetail;
