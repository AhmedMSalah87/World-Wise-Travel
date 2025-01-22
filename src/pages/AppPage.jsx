import React from "react";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
import AppUser from "../components/AppUser";
import styles from "./AppPage.module.css";

const AppPage = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <AppUser />
    </div>
  );
};

export default AppPage;
