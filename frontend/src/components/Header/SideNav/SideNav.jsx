import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SideNav.module.css";

const SideNav = ({ isOpen, setIsOpen }) => {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div
      className={styles.container}
      style={isOpen ? { width: "260px" } : { width: "0px" }}
    >
      <div className={styles.row}>
        <Link to="/update-profile" onClick={() => setIsOpen(false)}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-user"}></i>
            <p>My Profile</p>
          </div>
        </Link>
        <div className={styles.right}>
          <i class="fas fa-times" onClick={() => setIsOpen(false)}></i>
        </div>
      </div>
      <hr />
      <div className={styles.rowWrapper}>
        <div className={styles.row} onClick={() => setIsDropDown(!isDropDown)}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-user-shield"}></i>
            <p>Admin</p>
          </div>
          <div className={styles.right}>
            <i className={styles.icon + ` fas fa-angle-double-${ isDropDown ? `up` : `down` }`}></i>
          </div>
        </div>
        <div
          className={styles.dropdown}
          style={isDropDown ? { height: "100%" } : { height: "0px" }}
        >
          <p>Users</p>
          <p>Products</p>
          <p>Orders</p>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-home"}></i>
            <p>Home</p>
          </div>
        </Link>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-users"}></i>
            <p>About</p>
          </div>
        </Link>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
        <Link to="/cart" onClick={() => setIsOpen(false)}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-cart-plus"}></i>
            <p>Cart</p>
          </div>
        </Link>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-store-alt"}></i>
            <p>Shop</p>
          </div>
        </Link>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
        <div className={styles.left}>
          <i className={styles.icon + " fas fa-sign-out-alt"}></i>
          <p>Logout</p>
        </div>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
