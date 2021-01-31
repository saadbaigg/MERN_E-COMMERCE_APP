import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./ProductCarousel.module.css";

const ProductCarousel = ({ images }) => {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      swipeable={true}
      emulateTouch={true}
      dynamicHeight={true}
    >
      {images.map((image) => (
        <div className={styles.div}>
          <img src={image} className={styles.img} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
