import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../constants/routes";

import { FaCheckCircle } from "react-icons/fa";
import PricingChip from "../common/pricing-chip/pricing-chip.component";
import ImageCarousel from "./image-carousel/image-carousel.component";

import "./item-card.styles.scss";
import "../../styles/text.styles.scss";

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <div className="images">
        <ImageCarousel />
      </div>
      <div className="product-details">
        <div className="title">
          <span className="category">Sports and Games</span>
          <h2 className="name ri-text-style-2">Single</h2>
        </div>
        <p className="description">
          Single door fridge or refrigerator 190 Ltrs near new condition with
          fast and effective cooling system to keep your food fresh available on
          rent in Bangalore
        </p>
        <div className="bulk-order">
          <FaCheckCircle className="check" />
          Bulk order available
        </div>
        <div className="pricing-details">
          <PricingChip perOf="Day" price="50000" />
          <PricingChip perOf="Week" price="63000" />
          <PricingChip perOf="Month" price="150000" />
        </div>
      </div>
      <Link to={AppRoutes.DETAILS} className="view-details">
        view details
      </Link>
    </div>
  );
};

export default ItemCard;
