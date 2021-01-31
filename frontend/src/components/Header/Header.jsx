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
          {userInfo ? (
            <p
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </p>
          ) : (
            <>
              <Link to="/login">
                <p>Login</p>
              </Link>
              <Link to="/regiter">
                <p>Register</p>
              </Link>
            </>
          )}
          <SearchBar
            keyword={keyword}
            setKeyword={setKeyword}
            onSubmit={handleSubmit}
          />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.leftContainer}>
          <Link to="/">
            <h4>eSHOP</h4>
          </Link>
        </div>
        <div className={styles.rightContainer}>
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
      </div>
    </header>
  );
};

export default Header;
