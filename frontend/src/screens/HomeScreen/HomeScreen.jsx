import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import axios from 'axios'
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchedData()
  }, [])

  return (
    <div className={styles.container}>
      <h1>Latest Products</h1>
      <div className={styles.productsContainer}>
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
  );
};

export default HomeScreen;
