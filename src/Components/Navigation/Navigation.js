import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navBox}>
      <ul>
        <li>
          <NavLink to="/" activeClassName={styles.active} exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName={styles.active}>
            cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
