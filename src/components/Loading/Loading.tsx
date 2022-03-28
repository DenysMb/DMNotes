import React, { useEffect, useState } from "react";
import { colors } from "../../shared/constants";
import Styles from "./Loading.module.scss";

const Loading = ({ show }: { show: boolean }) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const [delayShow, setDelayShow] = useState(true);

  useEffect(() => {
    if (show) {
      setDelayShow(true);
    } else {
      setTimeout(() => {
        setDelayShow(false);
      }, 500);
    }
  }, [show]);

  return delayShow ? (
    <div
      className={`${Styles.Loading} ${Styles["Loading" + randomColor]} ${
        show ? Styles.LoadingShow : ""
      }`}
    >
      <div className={Styles.LoadingSpinner} />
    </div>
  ) : null;
};

export default Loading;
