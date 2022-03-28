import React from "react";
import { colors } from "../../shared/constants";
import Styles from "./Loading.module.scss";

const Loading = () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={Styles.Loading}>
      <div
        className={`${Styles.LoadingSpinner} ${
          Styles["LoadingSpinner" + randomColor]
        }`}
      />
    </div>
  );
};

export default Loading;
