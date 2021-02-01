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
import EditProductScreen from "./screens/EditProductScreen/EditProductScreen";
import OrdersListScreen from "./screens/OrdersListScreen/OrdersListScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";

import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.css";

const App = ({ history }) => {
  return (
    <Router>
      <Route render={({ history }) => <Header history={history} />} />
      <main className={styles.main}>
        {/* private routes (admin) */}
        <Route path="/admin/orderslist" component={OrdersListScreen} />
        <Route path="/admin/productslist" component={ProductsListScreen} />
        <Route path="/admin/product/:id/edit" component={EditProductScreen} />
        <Route path="/userslist" component={UserListScreen} />
        <Route path="/user/:id/edit" component={EditUserScreen} />
        {/* auth */}
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        {/* public routes */}
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/place-order" component={PlaceOrderScreen} />
        <Route path="/update-profile" component={UpdateProfileScreen} />
        <Route path="/orders/:id" component={OrderDetails} />
        <Route path="/search/:keyword" component={SearchScreen} />
        <Route path="/" component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
