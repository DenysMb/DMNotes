import React from "react";
import Styles from "./SearchBar.module.scss";

const SearchBar = ({ filter }: { filter: (arg0: string) => void }) => {
  return (
    <div className={Styles.SearchBar}>
      <input
        type="text"
        className={Styles.SearchBarInput}
        placeholder="Search here"
        onChange={(ev) => filter(ev.target.value)}
      />
      <div className={Styles.SearchBarIcon}>🔍</div>
    </div>
  );
};

export default SearchBar;
