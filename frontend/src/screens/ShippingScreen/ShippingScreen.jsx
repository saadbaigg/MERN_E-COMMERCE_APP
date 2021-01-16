import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "../../redux/actions/cartActions";
import styles from "./ShippingScreen.module.css";
import Steps from "../../components/Steps/Steps";

const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shipping } = cart;

  const [address, setAddress] = useState(shipping.address);
  const [city, setCity] = useState(shipping.city);
  const [postalCode, setPostal] = useState(shipping.postalCode);
  const [country, setCountry] = useState(shipping.country);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }))
    history.push('/payment')
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
      <Steps step1 step2 />
        <h1>Shipping</h1>
        <form>
        <div className={styles.field}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={address}
              placeholder="Enter Address"
              autoComplete="off"
              required
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
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Postal Code</label>
            <input
              type="text"
              name="postal"
              value={postalCode}
              placeholder="Enter Postal"
              required
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
              required
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