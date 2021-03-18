import React, { useState } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "./image-carousel.styles.scss";

const ImageCarousel = ({ images = [] }) => {
  const [active, setActive] = useState(0);

  const length = images.length;

  const handleRight = () => {
    setActive(active >= length - 1 ? 0 : active + 1);
  };

  const handleLeft = () => {
    setActive(active <= 0 ? length - 1 : active - 1);
  };

  return (
    <div className="image-carousel">
      <FiChevronLeft className="arrow left" onClick={handleLeft} />
      <FiChevronRight className="arrow right" onClick={handleRight} />
      {images.map((image, index) => (
        <img
          src={image}
          className={index === active ? "img__active" : ""}
          alt=""
          key={index}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
