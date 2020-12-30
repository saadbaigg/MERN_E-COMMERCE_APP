import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import axios from "axios";
import styles from "./ProductScreen.module.css";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchedData();
  }, []);

  const {
    name,
    image,
    description,
    price,
    rating,
    numReviews,
    countInStock,
  } = product;
  return (
    <div className={styles.container}>
      <Link to="/">
        <p className={styles.goBack}>Go back</p>
      </Link>

      <div className={styles.subContainer}>
        <div className={styles.imgContainer}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.textContainer}>
          <h1>{name}</h1>
          <hr />
          <div className={styles.ratingContainer}>
            <Rating value={rating} text={`${numReviews} reviews`} />
          </div>
          <hr />
          <p className={styles.price}>Price: ${price}</p>
          <hr />
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.finalContainer}>
          <span>
            <p>Price:</p>
            <p>${price}</p>
          </span>
          <span>
            <p>Status:</p>
            <p>{countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
          </span>
          <span>
            <button disabled={countInStock > 0}>Add to cart</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
