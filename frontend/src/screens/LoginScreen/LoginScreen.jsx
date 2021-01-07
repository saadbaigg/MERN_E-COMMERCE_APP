import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import styles from "./LoginScreen.module.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Sign in</h1>
        <Message text="Invalid email or password" />
        <form>
          <div className={styles.field}>
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Sign in</button>
          <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
