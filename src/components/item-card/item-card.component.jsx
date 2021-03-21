import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../constants/routes";

import { FaCheckCircle } from "react-icons/fa";
import PricingChip from "../common/pricing-chip/pricing-chip.component";
import ImageCarousel from "./image-carousel/image-carousel.component";

import "./item-card.styles.scss";
import "../../styles/text.styles.scss";

const ItemCard = ({ item }) => {
  const {
    description,
    isBulkAvailable,
    images,
    name,
    category,
    pricePerDayInPaise,
    pricePerMonthInPaise,
    pricePerWeekInPaise,
  } = item;

  return (
    <div className="item-card">
      <div className="images">
        <ImageCarousel images={images} />
      </div>
      <div className="product-details">
        <div className="title">
          <span className="category">{category}</span>
          <h2 className="name ri-text-style-2">{name}</h2>
        </div>
        <p className="description">{description}</p>
        {isBulkAvailable && (
          <div className="bulk-order">
            <FaCheckCircle className="check" />
            Bulk order available
          </div>
        )}
        <div className="pricing-details">
          <PricingChip perOf="Day" price={pricePerDayInPaise} />
          <PricingChip perOf="Week" price={pricePerWeekInPaise} />
          <PricingChip perOf="Month" price={pricePerMonthInPaise} />
        </div>
      </div>
      <Link to={`${AppRoutes.ITEMS}/4`} className="view-details">
        view details
      </Link>
    </div>
  );
};

export default ItemCard;
