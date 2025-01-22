import React from "react";
import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./SideBar.module.css";
import { Outlet } from "react-router";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          © Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default SideBar;
