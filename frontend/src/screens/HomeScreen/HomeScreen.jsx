import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Product from "../../components/Product/Product";
import { listProducts } from "../../redux/actions/productActions";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Latest Products</h1>
      <div className={styles.productsContainer}>
        {loading ? (
          <Loader />
        ) : error ? (
          <h2>some error</h2>
        ) : (
          products.map((item) => (
            <Product
              id={item._id}
              img={item.image}
              name={item.name}
              rating={item.rating}
              numReviews={item.numReviews}
              price={item.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
