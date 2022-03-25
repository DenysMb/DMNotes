import React from "react";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Styles.Header}>
      <h1 className={Styles.HeaderTitle}>
        DMNotes
      </h1>
    </div>
  );
};

export default Header;
