import React, { useState } from "react";
import NavBar from "../components/NavBar";
import styles from "./LoginPage.module.css";
import Button from "../components/Button";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleLogSubmit(e) {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      userData.email === storedUser.email &&
      userData.password === storedUser.password
    ) {
      navigate("/app");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <main className={styles.login}>
      <NavBar />
      <form className={styles.form} onSubmit={handleLogSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={userData.email}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={userData.password}
            required
          />
        </div>
        <div>
          <Button styleType="primary" type="submit">
            Log in
          </Button>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
