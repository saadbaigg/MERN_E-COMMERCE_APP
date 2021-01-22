import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ isOpen }) => {
  return (
    <div
      className={styles.container}
      style={
        isOpen
          ? { visibility: "visible", opacity: "1" }
          : { visibility: "hidden", opacity: "0" }
      }
    >
      <input type="text" name="search" autoComplete="off" />
    </div>
  );
};

export default SearchBar;
