import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "../../redux/actions/cartActions";
import Steps from "../../components/Steps/Steps";
import img from "../../assets/mouse.jpg";
import styles from "./PlaceOrderScreen.module.css";

const PlaceOrderScreen = () => {
  return (
    <>
      <Steps step1 step2 step3 step4 />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.step}>
            <h2>Shipping</h2>
            <p>Address: L - 1596 Karachi, Pakistan</p>
          </div>
          <hr />
          <div className={styles.step}>
            <h2>Payment Method</h2>
            <p>Method: PayPal</p>
          </div>
          <hr />
          <div className={styles.step}>
            <h2>Order Items</h2>
            <div className={styles.products}>
              <div className={styles.product}>
                <img src={img} alt="mouse" />
                <p>G - Series Gaming Mouse</p>
                <span>1 x 549.99 = 589.99</span>
              </div>
              <hr />
              <div className={styles.product}>
                <img src={img} alt="mouse" />
                <p>G - Series Gaming Mouse</p>
                <span>1 x 549.99 = 589.99</span>
              </div>
              <hr />
              <div className={styles.product}>
                <img src={img} alt="mouse" />
                <p>G - Series Gaming Mouse</p>
                <span>1 x 549.99 = 589.99</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            <span>
              <p>Items</p>
              <p>$1237.99</p>
            </span>
            <span>
              <p>Shipping</p>
              <p>$0.00</p>
            </span>
            <span>
              <p>Tax</p>
              <p>$200.99</p>
            </span>
            <span>
              <p>Total</p>
              <p>$1540.95</p>
            </span>
            <span>
              <button>Place Order</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
