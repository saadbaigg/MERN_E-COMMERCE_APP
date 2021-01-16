import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "../../redux/actions/cartActions";
import Steps from "../../components/Steps/Steps";
import img from "../../assets/mouse.jpg";
import styles from "./PlaceOrderScreen.module.css";

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shipping, cartItems, payment } = cart;
  const { address, city, country, postal } = shipping;

  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  const shippingPrice = itemsPrice > 100 ? 0 : 100
  const taxPrice = Number((0.15 * itemsPrice).toFixed(2))
  const totalPrice = (Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)).toFixed(2)

  return (
    <div className={styles.mainContainer}>
      <Steps step1 step2 step3 step4 />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.step}>
            <h2>Shipping</h2>
            <p>{address}</p>
          </div>
          <hr />
          <div className={styles.step}>
            <h2>Payment Method</h2>
            <p>Method: {payment}</p>
          </div>
          <hr />
          <div className={styles.step}>
            <h2>Order Items</h2>
            <div className={styles.products}>
              {cartItems.map((product) => (
                <>
                  <div className={styles.product} key={product.product}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <span>{product.qty} x {product.price} = {(product.qty * product.price).toFixed(2)}</span>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            <span>
              <p>Items</p>
              <p>${itemsPrice}</p>
            </span>
            <span>
              <p>Shipping</p>
              <p>${shippingPrice}</p>
            </span>
            <span>
              <p>Tax</p>
              <p>${taxPrice}</p>
            </span>
            <span>
              <p>Total</p>
              <p>${totalPrice}</p>
            </span>
            <span>
              <button>Place Order</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
