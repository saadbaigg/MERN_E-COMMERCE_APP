import React from "react";
import styles from "./Product.module.css";

const Product = ({ key, img, name, rating, numReviews, price }) => {
  return (
    <div className={styles.card} key={key}>
      <img src={img} alt={name} />
      <div className={styles.cardBody}>
        <p>{name}</p>
        <p>
          {rating} from {numReviews} reviews
        </p>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Product;
