import React from "react";
import spinner from "../../assets/loader.png";
import styles from "./Loader.module.css";

const Loader = ({ width = "100px" }) => (
  <div className={styles.container}>
    <img
      style={{ width: width }}
      className={styles.loader}
      src={spinner}
      alt="loader"
    />
  </div>
);

export default Loader;
