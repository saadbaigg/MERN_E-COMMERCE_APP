import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../components/Rating/Rating";
import {
  addProductReview,
  listProductDetails,
} from "../../redux/actions/productActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import styles from "./ProductScreen.module.css";
import Modal from "../../components/Modal/Modal";

const ProductScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const [productRating, setProductRating] = useState("");
  const [productComment, setProductComment] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productReview = useSelector((state) => state.productReview);
  const {
    loading: reviewLoading,
    error: reviewError,
    success: reviewSuccess,
  } = productReview;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, reviewSuccess]);

  const {
    name,
    image,
    description,
    price,
    rating,
    numReviews,
    countInStock,
    reviews,
  } = product;

  var arr = [];
  let i;
  for (i = 0; i < countInStock; i++) {
    arr.push(i + 1);
  }

  const handleCartSubmitHandler = (e) => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "dropdown") {
      setProductRating(e.target.value);
    } else {
      setProductComment(e.target.value);
    }
  };

  const submitReview = (e) => {
    e.preventDefault();
    dispatch(addProductReview(match.params.id, productRating, productComment));
    setIsOpen(false)
  };

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
            {countInStock > 0 && (
              <span>
                <p>Qty</p>
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {arr.map((i) => (
                    <option value={i}>{i}</option>
                  ))}
                </select>
              </span>
            )}
            <span>
              <button
                onClick={handleCartSubmitHandler}
                disabled={countInStock <= 0}
              >
                Add to cart
              </button>
            </span>
          </div>
        </div>
      )}
      <div className={styles.reviewSection}>
        <div className={styles.reviewSectionTop}>
          <h2>Product Reviews</h2>
          <button onClick={() => setIsOpen(true)}>Write review</button>
        </div>
        {!reviews ? (
          <Loader width="30px" />
        ) : reviews.length === 0 ? (
          <p>No Reviews for this Product</p>
        ) : (
          reviews.map((review) => (
            <>
              <div key={review._id} className={styles.review}>
                <p>{review.name}</p>
                <p>{review.comment}</p>
                <Rating value={review.rating} text="rating" />
              </div>
              <hr />
            </>
          ))
        )}
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onChange={handleChange}
        onClick={submitReview}
        comment={productComment}
        rating={productRating}
      />
    </div>
  );
};

export default ProductScreen;
