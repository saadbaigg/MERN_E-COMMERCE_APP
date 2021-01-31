import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import Product from "../../components/Product/Product";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import { listProducts } from "../../redux/actions/productActions";
import styles from "./HomeScreen.module.css";

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const keyword = match.params.keyword;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <div className={styles.carouselContainer}>
        {loading ? null : (
          <ProductCarousel images={products.map((item) => item.image)} />
        )}
      </div>
      <div className={styles.productsContainer}>
        {loading ? (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        ) : error ? (
          <Message text="some error" />
        ) : (
          <>
            <h1>Top Rated Products</h1>
            {products.map((item) => (
              <Product
                id={item._id}
                img={item.image}
                name={item.name}
                rating={item.rating}
                numReviews={item.numReviews}
                price={item.price}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
