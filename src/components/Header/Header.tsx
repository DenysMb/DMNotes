import React from "react";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Styles.HeaderContainer}>
      <div className={Styles.HeaderTitle}>
        DMNotes
      </div>
    </div>
  );
};

export default Header;
