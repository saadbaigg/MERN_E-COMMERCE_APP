import React from "react";
import spinner from "../../assets/loader.png";
import styles from './Loader.module.css'

const Loader = () => <div className={styles.container}><img className={styles.loader} src={spinner} alt="loader" /></div>

export default Loader;
