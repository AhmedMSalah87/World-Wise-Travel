import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Logo = ({ height = "5.2rem" }) => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" style={{ height }} />
    </Link>
  );
};

export default Logo;
