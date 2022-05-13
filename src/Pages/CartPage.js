import React from "react";
import { useProduct } from "../Components/Context/Context";
import styles from "../styles/CartPage.module.scss";
const Cart = () => {
  const products = useProduct();
  const { cart, total } = products;
  console.log(cart);

  const cartHandler = (cart) => {
    if (!cart.length) {
      return (
        <div>
          <h3>CART NOOOO</h3>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <section className={styles.total}>Total</section>
          <section className={styles.details}>
            {cart.map((item) => {
              return (
                <div className={styles.product} key={item.id}>
                  <div className={styles.productTitles}>
                    <p>{item.name}</p>
                    <p>$ {item.price}</p>
                  </div>
                  <div className={styles.productImage}>
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      );
    }
  };

  return cartHandler(cart);
};

export default Cart;
