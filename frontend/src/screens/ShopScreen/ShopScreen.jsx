import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import Product from "../../components/Product/Product";
import { listProducts } from "../../redux/actions/productActions";
import ShopScreenBar from "../../components/ShopScreenBar/ShopScreenBar";
import styles from "./ShopScreen.module.css";

const ShopScreen = ({ match }) => {
  const dispatch = useDispatch();
  const keyword = match.params.keyword;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <ShopScreenBar />
      <div className={styles.productsContainer}>
        <h1>All Products</h1>
        <div className={styles.productList}>
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
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;
