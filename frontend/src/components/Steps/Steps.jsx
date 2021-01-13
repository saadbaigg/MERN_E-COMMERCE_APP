import React from "react";
import { Link } from "react-router-dom";
import styles from "./Steps.module.css";

const Steps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className={styles.container}>
      {step1 ? (
        <Link to="/login">
          <p className={styles.active}>Sign In</p>
        </Link>
      ) : (
        <p className={styles.disabled}>Sign In</p>
      )}
      {step2 ? (
        <Link to="/shipping">
          <p className={styles.active}>Shipping</p>
        </Link>
      ) : (
        <p className={styles.disabled}>Shipping</p>
      )}
      {step3 ? (
        <Link to="/payment">
          <p className={styles.active}>Payment</p>
        </Link>
      ) : (
        <p className={styles.disabled}>Payment</p>
      )}
      {step4 ? (
        <Link to="/place-order">
          <p className={styles.active}>Place Order</p>
        </Link>
      ) : (
        <p className={styles.disabled}>Place Order</p>
      )}
    </div>
  );
};

export default Steps;
