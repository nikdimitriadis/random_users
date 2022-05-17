import React from "react";
import styles from "./PhotoWrap.module.css";

const PhotoWrap = ({ children }) => {
  return <div className={styles.flexDiv}>{children}</div>;
};

export default PhotoWrap;
