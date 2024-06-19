/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, onClick, type }) {
  console.log(styles);
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
