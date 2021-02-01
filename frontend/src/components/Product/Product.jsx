import React from "react";
import Rating from "../Rating/Rating";
import { Link } from 'react-router-dom'
import styles from "./Product.module.css";

const Product = ({ id, img, name, rating, numReviews, price }) => {
  return (
    <div className={styles.card} key={id}>
      <img src={img} alt={name} />
      <div className={styles.cardBody}>
        <Link to={`/product/${id}`}><p>{name}</p></Link>
        <Rating value={rating} text={`${numReviews} reviews`} />
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Product;
