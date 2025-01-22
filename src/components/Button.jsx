import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, styleType, onClick }) => {
  return (
    <button className={`${styles.btn} ${styles[styleType]}`} onClick={onClick}>
      {children}
    </button>
    //The Button component needs to explicitly pass down all the props, including onClick, to the native <button> element. Without this, the click handler defined in the parent (e.g., for the "back" button) wouldn’t execute.
  );
};

export default Button;
