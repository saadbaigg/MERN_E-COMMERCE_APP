import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.container}>
      <div className={styles.leftContainer}>
        <Link to="/">
          <h4>eSHOP</h4>
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <SearchBar isOpen={isOpen} />
        <i className={styles.searchIcon + " fas fa-search"} onClick={() => setIsOpen(!isOpen)}></i>
        <Link to="/cart">
          <p>cart</p>
        </Link>
        {userInfo && userInfo.isAdmin ? (
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              Admin <i class="fas fa-sort-down"></i>
            </button>
            <div className={styles.dropdownContent}>
              <Link to="/userslist">Users</Link>
              <Link to="/admin/productslist">Products</Link>
              <Link to="/admin/orderslist">Orders</Link>
            </div>
          </div>
        ) : null}
        {userInfo ? (
          <Link to="/update-profile">
            <p>{userInfo.name}</p>
          </Link>
        ) : (
          <Link to="/login">
            <p>sign in</p>
          </Link>
        )}
        {userInfo ? (
          <a>
            <p
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </p>
          </a>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
