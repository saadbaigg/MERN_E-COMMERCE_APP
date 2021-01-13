import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "../../redux/actions/cartActions";
import styles from "./PaymentScreen.module.css";
import Steps from "../../components/Steps/Steps";

const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shipping } = cart;

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  if (!shipping) {
    history.push("/shipping");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/place-order");
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Steps step1 step2 step3 />
        <h1>Payment Method</h1>
        <form>
          <h3>Select Method</h3>
          <div className={styles.field}>
            <input
              type="radio"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label>Payment Method</label>
          </div>
          <button onClick={handleSubmit}>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
