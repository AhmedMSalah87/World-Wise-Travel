import React from "react";
import styles from "./AppNav.module.css";
import { NavLink } from "react-router";

const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">countries</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
