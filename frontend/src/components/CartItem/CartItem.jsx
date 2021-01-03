import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import styles from "./CartItem.module.css";

const CartItem = ({ img, name, id, price, qty, countInStock }) => {
  const dispatch = useDispatch();

  var arr = [];
  let i;
  for (i = 0; i < countInStock; i++) {
    arr.push(i + 1);
  }

  const removeItem = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <div className={styles.container}>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
      {countInStock > 0 && (
        <span>
          <select
            value={qty}
            onChange={(e) => dispatch(addToCart(id, Number(e.target.value)))}
          >
            {arr.map((i) => (
              <option value={i}>{i}</option>
            ))}
          </select>
        </span>
      )}
      <button onClick={removeItem} >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
