import React from "react";
import { Link } from "react-router-dom";
import css from "./Menu.module.css";

const Menu = () => {
  return (
    <header className="">
      <h3 className={css.textGreen}>Logo</h3>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </nav>
    </header>
  );
};

export default Menu;
