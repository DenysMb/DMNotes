import React, { InputHTMLAttributes } from "react";
import Styles from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  helperText?: string;
};

const Input = ({ helperText, error, ...props }: InputProps) => {
  return (
    <div className={Styles.InputContainer}>
      <input
        className={`${Styles.Input} ${error ? Styles.InputError : ""}`}
        {...props}
      />
      {error && helperText && (
        <p className={Styles.InputHelper}>{helperText}</p>
      )}
    </div>
  );
};

export default Input;
