import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useProduct } from "../Context/Context";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const products = useProduct();
  const { cart } = products;
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
            cart{" "}
            <h3 style={{ color: "blueviolet", display: "inline-block" }}>
              {cart.reduce((total, item) => {
                return total + item.quantity;
              }, null)}
            </h3>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
