import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ history }) => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyword.trim()) {
      history.push("/");
    } else {
      history.push(`/search/${keyword}`);
    }
  };

  return (
    <header className={styles.container}>
      <div className={styles.top}>
        <div className={styles.logoContainer}>
          <i class="fas fa-shopping-cart"></i>
          <Link to="/">
            <p>eSHOP</p>
          </Link>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.login}>
            {userInfo && userInfo.isAdmin ? (
              <div className={styles.dropdown}>
                <i className={styles.icon + " fas fa-user-shield"}></i>
                <button className={styles.dropbtn}>
                  Admin <i className="fas fa-sort-down"></i>
                </button>
                <div className={styles.dropdownContent}>
                  <Link to="/userslist">Users</Link>
                  <Link to="/admin/productslist">Products</Link>
                  <Link to="/admin/orderslist">Orders</Link>
                </div>
              </div>
            ) : null}

            {userInfo ? (
              <>
                <div className={styles.dropdown}>
                  <i className={styles.icon + " fas fa-user"}></i>
                  <button className={styles.dropbtn}>
                    {userInfo.name} <i className="fas fa-sort-down"></i>
                  </button>
                  <div className={styles.dropdownContent}>
                    <Link to="/update-profile">Update Profile</Link>
                  </div>
                </div>
                <i className={styles.icon + " fas fa-user-lock"}></i>
                <p
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </p>
              </>
            ) : (
              <>
                <Link to="/login">
                  <p>Login</p>
                </Link>
                <p>/</p>
                <Link to="/register">
                  <p>Register</p>
                </Link>
              </>
            )}
          </div>
          <div className={styles.search}>
            <SearchBar
              keyword={keyword}
              setKeyword={setKeyword}
              onSubmit={handleSubmit}
            />
            <i className={styles.menu + " fas fa-bars"}></i>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/">
          <h4>Shop</h4>
        </Link>
        <Link to="/cart">
          <h4>Cart</h4>
        </Link>
        <Link to="/">
          <h4>About</h4>
        </Link>
      </div>
    </header>
  );
};

export default Header;
