import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.headerBox}>
      <h4>REACT SHOPPING</h4>
      <Navigation />
    </header>
  );
};

export default Header;
