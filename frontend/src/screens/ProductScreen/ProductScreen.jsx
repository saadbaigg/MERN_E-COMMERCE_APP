import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../components/Rating/Rating";
import { listProductDetails } from "../../redux/actions/productActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import styles from "./ProductScreen.module.css";

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const {
    name,
    image,
    description,
    price,
    rating,
    numReviews,
    countInStock,
  } = product;

  var arr = [];
  let i;
  for (i = 0; i < countInStock; i++) {
    arr.push(i + 1);
  }

  return (
    <div className={styles.container}>
      <Link to="/">
        <p className={styles.goBack}>Go back</p>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
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
            <select>
              {arr.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
            <span>
              <button disabled={countInStock > 0}>Add to cart</button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
