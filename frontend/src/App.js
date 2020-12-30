import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main className={styles.main}>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
