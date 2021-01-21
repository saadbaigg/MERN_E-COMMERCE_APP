import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({
  isOpen,
  setIsOpen,
  onChange,
  onClick,
  comment,
  rating,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.overlay}
        style={
          isOpen
            ? { visibility: "visible", opacity: "1" }
            : { visibility: "hidden", opacity: "0" }
        }
      >
        <div className={styles.popup}>
          <div className={styles.header}>
            <h3>Write your review</h3>
            <i
              className={styles.close + " fas fa-times"}
              onClick={() => setIsOpen(false)}
            ></i>
          </div>
          <div className={styles.content}>
            <div className={styles.field}>
              <label>Rating</label>
              <div className={styles.selectDropdown}>
                <select onChange={onChange} value={rating} name="dropdown">
                  <option value="1">Poor</option>
                  <option value="2">Fair</option>
                  <option value="3">Good</option>
                  <option value="4">Very Good</option>
                  <option value="5">Excellent</option>
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label>Comment</label>
              <input
                type="text"
                name="comment"
                value={comment}
                placeholder="Enter Your Comment"
                autoComplete="off"
                onChange={onChange}
              />
            </div>
            <div className={styles.btnContainer}>
              <button onClick={() => setIsOpen(false)}>Close</button>
              <button onClick={onClick}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
