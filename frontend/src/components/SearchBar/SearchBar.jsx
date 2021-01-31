import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ history, keyword, setKeyword, onSubmit }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <i class="fas fa-search" onClick={onSubmit}></i>
    </div>
  );
};

export default SearchBar;
