import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import UpdateProfileScreen from "./screens/UpdateProfileScreen/UpdateProfileScreen";
import ShippingScreen from "./screens/ShippingScreen/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen/PlaceOrderScreen";
import OrderDetails from "./screens/OrderDetails/OrderDetails";
import UserListScreen from "./screens/UserListScreen/UserListScreen";
import EditUserScreen from "./screens/EditUserScreen/EditUserScreen";
import ProductsListScreen from "./screens/ProductsListScreen/ProductsListScreen";

import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main className={styles.main}>
        <Route path="/admin/productslist" component={ProductsListScreen} />
        <Route path="/userslist" component={UserListScreen} />
        <Route path="/user/:id/edit" component={EditUserScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/update-profile" component={UpdateProfileScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/place-order" component={PlaceOrderScreen} />
        <Route path="/orders/:id" component={OrderDetails} />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
