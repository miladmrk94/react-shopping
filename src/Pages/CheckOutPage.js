import React from "react";
import styles from "../styles/CheckOutPage.js.module.scss";
import moment from "moment";
import { useProduct } from "../Components/Context/Context";
import { useSelector } from "react-redux";
const CheckOutPage = () => {
  //-----context
  // const products = useProduct();
  // const { cart } = products;
  // console.log(cart);

  //-----redux
  const cart = useSelector((state) => state.cart);

  const totalOffPrice = cart.reduce((total, item) => {
    const price = item.offPrice * item.quantity;
    return total + price;
  }, 0);

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <table className={styles.GeneratedTable}>
          <thead>
            <tr>
              <th>Price</th>
              <th>Quantity</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i.offPrice}$</td>
                  <td>{i.quantity}</td>
                  <td>{i.name}</td>
                </tr>
              );
            })}
            <br />
            <tr>
              <th colSpan="2">{totalOffPrice}$</th>
              <td>TOTAL Price</td>
            </tr>
            <tr>
              <th colspan="2">{moment().format("LL")}</th>
              <td>{moment().format("LTS")}</td>
            </tr>
            <tr>
              <th colspan="3">Address: P.Sherman ,42 Wallaby Way, Sydney</th>
            </tr>
            <h3 className={styles.payment}> Payment is done</h3>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CheckOutPage;
