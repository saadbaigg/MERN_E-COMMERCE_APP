import React from "react";
import styles from "./Product.module.css";

const Product = ({ key, img, name, rating, numReviews, price }) => {
  return (
    <div className={styles.card} key={key}>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>
        {rating} from {numReviews} reviews
      </p>
      <h3>{price}</h3>
    </div>
  );
};

export default Product;
