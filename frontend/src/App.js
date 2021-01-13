import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import UpdateProfileScreen from "./screens/UpdateProfileScreen/UpdateProfileScreen";
import ShippingScreen from "./screens/ShippingScreen/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen/PaymentScreen";
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main className={styles.main}>
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/update-profile" component={UpdateProfileScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
