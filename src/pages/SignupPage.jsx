import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import styles from "./LoginPage.module.css";
import Button from "../components/Button";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router";

const SignupPage = () => {
  const { signUp } = useContext(UserContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    signUp(userData);
    navigate("/app");
  }

  return (
    <main className={styles.login}>
      <NavBar />
      <form className={styles.form} onSubmit={handleSignupSubmit}>
        <div className={styles.row}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={handleInputChange}
            value={userData.name}
            name="name"
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={handleInputChange}
            value={userData.email}
            name="email"
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleInputChange}
            value={userData.password}
            name="password"
            required
          />
        </div>
        <div>
          <Button styleType="primary" type="submit">
            Sign up
          </Button>
        </div>
      </form>
    </main>
  );
};

export default SignupPage;
