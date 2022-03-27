import React from "react";
import Styles from "./Icon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  name: IconProp;
};

const Icon = ({ name }: IconProps) => {
  return (
    <div className={Styles.Icon}>
      <FontAwesomeIcon icon={name} />
    </div>
  );
};

export default Icon;
