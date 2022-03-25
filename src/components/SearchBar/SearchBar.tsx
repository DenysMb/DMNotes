import React from "react";
import Styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={Styles.SearchBar}>
      <input
        type="text"
        className={Styles.SearchBarInput}
        placeholder="Search here"
      />
      <div className={Styles.SearchBarIcon}>🔍</div>
    </div>
  );
};

export default SearchBar;
