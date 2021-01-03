import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./CartScreen.module.css";
import Message from "../../components/Message/Message";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1>Shopping Cart</h1>
        <div className={styles.itemsContainer}>
          {cartItems.length === 0 ? (
            <Message text="You cart is empty" />
          ) : (
            cartItems.map((item) => (
              <>
                <CartItem
                  id={item.product}
                  img={item.image}
                  name={item.name}
                  price={item.price}
                  qty={item.qty}
                  countInStock={item.countInStock}
                />
                <hr />
              </>
            ))
          )}
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.checkout}>
          <span>
            <h2>
              subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h2>
          </span>
          <span>
            <p>
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </p>
          </span>
          <span>
            <button>proceed to checkout</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
