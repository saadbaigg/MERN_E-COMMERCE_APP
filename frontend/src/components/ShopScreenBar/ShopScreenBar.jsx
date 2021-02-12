import React from "react";
import styles from "./ShopScreenBar.module.css";

const ShopScreenBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3>Categories</h3>
        <i className={styles.rightIcon + " fas fa-angle-double-right"}></i>
        <i className={styles.downIcon + " fas fa-angle-double-down"}></i>
        <div className={styles.categories}>
          <p>Electronics</p>
          <p>|</p>
          <p>Clothing</p>
          <p>|</p>
          <p>Food</p>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default ShopScreenBar;
