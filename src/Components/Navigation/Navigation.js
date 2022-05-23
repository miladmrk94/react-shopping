import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import { useProduct } from "../Context/Context";
import styles from "./Navigation.module.scss";
import {
  RiHomeSmileLine,
  RiShoppingCartLine,
  RiUserSharedLine,
  RiUserSettingsLine,
  RiShutDownLine,
} from "react-icons/ri";

const Navigation = () => {
  const auth = useAuth();
  const [user, setUser] = useState(auth);
  const products = useProduct();
  const { cart } = products;

  let bajColor = cart.reduce((total, item) => {
    return total + item.quantity;
  }, null);

  const [baj, setBaj] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setBaj(bajColor);
    }, 500);
    console.log(bajColor);
    return () => {
      clearTimeout();
    };
  }, [bajColor]);

  return (
    <nav className={styles.navBox}>
      <ul>
        <li>
          <NavLink to="/" activeClassName={styles.active} exact={true}>
            <RiHomeSmileLine className={styles.line} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName={styles.active}>
            <RiShoppingCartLine />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={auth ? "/profile" : "/login"}
            activeClassName={styles.active}
            exact={true}
          >
            {auth ? <RiUserSettingsLine /> : <RiUserSharedLine />}
          </NavLink>
        </li>
        <p className={bajColor > baj ? `${styles.bajAction}` : null}>
          {bajColor}
        </p>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
