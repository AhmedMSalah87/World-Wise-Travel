import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import styles from "./AppUser.module.css";

const AppUser = () => {
  const { user } = useContext(UserContext);
  return (
    <div className={styles.user}>
      <img src="" alt="" />
      <span>Welcome, {user?.name}</span>
      <button>Logout</button>
    </div>
  );
};

export default AppUser;
