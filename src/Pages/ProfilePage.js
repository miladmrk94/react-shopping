import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/Context/AuthProvider";
import styles from "../styles/ProfilePage.module.scss";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { auth } from "../Components/firbase-config";

const ProfilePage = ({ history }) => {
  const userData = useAuth();

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <RiAccountPinBoxFill size="100px" style={{ margin: "60px" }} />
        <div className={styles.boxOne}>
          <h2>Name: {userData.name}</h2>
          <h2>Email: {userData.email}</h2>
          <h2>Phone: {userData.phoneNumber}</h2>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
