import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { ButtonHTMLAttributes } from "react";
import Icon from "../Icon";
import { NoteProps } from "../Note/Note";
import Styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: IconProp;
  label?: string;
  fullWidth?: boolean;
  color?: NoteProps["color"];
};

const Button = ({ icon, label, fullWidth, color = "GREY", ...props }: ButtonProps) => {
  return (
    <button
      className={`${Styles.Button} ${Styles["Button" + color]} ${
        fullWidth ? Styles.ButtonFullWidth : ""
      }`}
      {...props}
    >
      {icon && (
        <div className={Styles.ButtonIcon}>
          <Icon name={icon} />
        </div>
      )}

      <p className={Styles.ButtonText}>{label}</p>
    </button>
  );
};

export default Button;
