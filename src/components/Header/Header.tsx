import React from "react";
import { logout } from "../../firebase";
import useUser from "../../hooks/useUser";
import Icon from "../Icon";
import Styles from "./Header.module.scss";

const Header = () => {
  const { user } = useUser();

  return (
    <div className={Styles.Header}>
      <h1 className={Styles.HeaderTitle}>DMNotes</h1>
      <div className={Styles.HeaderUser} onClick={logout}>
        <h3 className={Styles.HeaderUserName}>{user?.name}</h3>
        <div className={Styles.HeaderUserIcon}>
          <Icon name="right-to-bracket" />
        </div>
      </div>
    </div>
  );
};

export default Header;
