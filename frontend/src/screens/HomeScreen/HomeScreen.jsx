import React from "react";
import Product from "../../components/Product/Product";
import styles from "./HomeScreen.module.css";
import { products } from "../../products";

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <h1>Latest Products</h1>
      <div className={styles.productsContainer}>
        {products.map((item) => (
          <Product
            key={item._id}
            img={item.image}
            name={item.name}
            rating={item.rating}
            numReviews={item.numReviews}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
