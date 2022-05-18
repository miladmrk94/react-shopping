import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.headerBox}>
      <div className={styles.image}>
        <img src="https://s6.uupload.ir/files/logo_6zg8.png" alt="logo" />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
