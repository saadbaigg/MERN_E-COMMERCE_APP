import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/userActions";
import styles from "./ShippingScreen.module.css";

const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
  }, [history, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Shipping</h1>
        {error ? <Message text={error} /> : null}
        {loading ? <Loader /> : null}
        <form>
        <div className={styles.field}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={address}
              placeholder="Enter Address"
              autoComplete="off"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={city}
              placeholder="Enter City"
              autoComplete="off"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Postal Code</label>
            <input
              type="text"
              name="postal"
              value={postal}
              placeholder="Enter Postal"
              onChange={(e) => setPostal(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={country}
              placeholder="Enter country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default ShippingScreen;