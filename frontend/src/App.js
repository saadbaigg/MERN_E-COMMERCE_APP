import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
};

export default App;
