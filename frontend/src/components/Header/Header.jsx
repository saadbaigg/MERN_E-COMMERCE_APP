import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  return (
    <header className={styles.container}>
      <Link to="/">
        <h4>eSHOP</h4>
      </Link>
      <Link to="/cart">
        <p>cart</p>
      </Link>
      {userInfo ? (
        <Link to="/update-profile">
          <p>{userInfo.name}</p>
        </Link>
      ) : (
        <Link to="/login">
          <p>sign in</p>
        </Link>
      )}
      {userInfo ? <p onClick={() => dispatch(logout())}>Logout</p> : null}
    </header>
  );
};

export default Header;
