import React from "react";
import spinner from "../../assets/loader.png";
import styles from './Loader.module.css'

const Loader = () => <img className={styles.loader} src={spinner} alt="loader" />

export default Loader;
