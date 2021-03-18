import React from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "./image-carousel.styles.scss";

const ImageCarousel = ({ images }) => {
  return (
    <div className="image-carousel">
      <FiChevronLeft className="arrow left" />
      <FiChevronRight className="arrow right" />
      <img src="" alt="" />
    </div>
  );
};

export default ImageCarousel;
