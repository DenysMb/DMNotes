import React from "react";
import Styles from "./Button.module.scss";

type ButtonProps = {
  icon?: string;
};

const Button = ({ icon }: ButtonProps) => {
  return (
    <button className={Styles.Button}>
      {icon && <div className={Styles.ButtonIcon}>{icon}</div>}

      <p className={Styles.ButtonText}>ButtonText</p>
    </button>
  );
};

export default Button;
