import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import styles from "./AppUser.module.css";
import { useNavigate } from "react-router";

const AppUser = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <div className={styles.user}>
      <img src="" alt="" />
      <span>Welcome, {user?.name}</span>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default AppUser;
