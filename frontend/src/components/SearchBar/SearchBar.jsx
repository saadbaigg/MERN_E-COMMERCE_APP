import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ isOpen, history, keyword, setKeyword, onSubmit }) => {

  return (
    <div
      className={styles.container}
      style={
        isOpen
          ? { visibility: "visible", opacity: "1" }
          : { visibility: "hidden", opacity: "0" }
      }
    >
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search Product"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <button onClick={onSubmit} >Search</button>
    </div>
  );
};

export default SearchBar;
