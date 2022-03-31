import React, { useEffect, useState } from "react";
import Styles from "./Loading.module.scss";

const Loading = ({ show }: { show: boolean }) => {
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
    <div className={`${Styles.Loading}  ${show ? Styles.LoadingShow : ""}`}>
      <div className={Styles.LoadingSpinner} />
    </div>
  ) : null;
};

export default Loading;
