import React, { useState } from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ img, name, id, price, qty, countInStock }) => {
  const [_qty, setQty] = useState(1);

  var arr = [];
  let i;
  for (i = 0; i < countInStock; i++) {
    arr.push(i + 1);
  }

  return (
    <div className={styles.container}>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
      {countInStock > 0 && (
        <span>
          <select value={_qty} onChange={(e) => setQty(e.target.value)}>
            {arr.map((i) => (
              <option value={i}>{i}</option>
            ))}
          </select>
        </span>
      )}
      <button>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
