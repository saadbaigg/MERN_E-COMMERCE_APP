import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../redux/actions/orderActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import styles from "./OrderDetails.module.css";

const OrderDetails = ({ match }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, payment } = cart;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { success, order, error, loading } = orderDetails;

  const itemsPrice = Number(
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  ).toFixed(2);
  const shippingPrice = itemsPrice > 100 ? Number(0).toFixed(2) : Number(100).toFixed(2);
  const taxPrice = Number((0.15 * itemsPrice).toFixed(2));
  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2);

  useEffect(() => {
    dispatch(getOrder(match.params.id));
  }, []);

  const placeOrder = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.mainContainer}>
          <h1 className={styles.orderNo}>Order {order._id}</h1>
          <div className={styles.container}>
            <div className={styles.leftContainer}>
              <div className={styles.step}>
                <h2>Shipping</h2>
                <p>Name: {order.user.name}</p>
                <p>Email: {order.user.email}</p>
                <p>Address: {order.shippingAddress.address}</p>
                <Message
                  variant={order.isDelivered ? "success" : "error"}
                  text={order.isDelivered ? "Delivered" : "Not Delivered"}
                />
              </div>
              <hr />
              <div className={styles.step}>
                <h2>Payment Method</h2>
                <p>Method: {payment}</p>
                <Message
                  variant={order.isPaid ? "success" : "error"}
                  text={order.isPaid ? "Paid" : "Not Paid"}
                />
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
                        <span>
                          {product.qty} x {product.price} ={" "}
                          ${(product.qty * product.price).toFixed(2)}
                        </span>
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
                  <button onClick={placeOrder}>Place Order</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
