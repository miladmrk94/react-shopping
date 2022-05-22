import React from "react";
import { useAuth } from "../Context/AuthProvider";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";
import { RiShutDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const auth = useAuth();

  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <header className={styles.headerBox}>
      <div className={styles.image}>
        <img src="https://s6.uupload.ir/files/logo_43g2.png" alt="logo" />
        {auth && (
          <div className={styles.logout} onClick={logoutHandler}>
            <Link to="/" className={styles.logout}>
              <RiShutDownLine size="30px" color="red" />
              <p>Logout</p>
            </Link>
          </div>
        )}
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
