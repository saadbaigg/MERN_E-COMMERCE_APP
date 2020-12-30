import React from "react";
import Rating from "../Rating/Rating";
import styles from "./Product.module.css";

const Product = ({ key, img, name, rating, numReviews, price }) => {
  return (
    <div className={styles.card} key={key}>
      <img src={img} alt={name} />
      <div className={styles.cardBody}>
        <p>{name}</p>
        <p>
          <Rating value={rating} text={`${numReviews} reviews`} />
        </p>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Product;
