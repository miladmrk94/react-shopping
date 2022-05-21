import React from "react";
import styles from "../styles/Total.module.scss";
import { RiVisaLine, RiPaypalFill } from "react-icons/ri";

const Total = () => {
  return (
    <div className={styles.continuer}>
      <div className={styles.box}>
        <div className={styles.paymentTitle}>
          <h3>TOTAL</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Total;
