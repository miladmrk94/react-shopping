import React from "react";
import { useProduct, useProductAction } from "../Components/Context/Context";
import styles from "../styles/CartPage.module.scss";
const Cart = () => {
  const products = useProduct();
  const dispatch = useProductAction();
  const { cart } = products;
  console.log(cart);

  const plusHandler = (id) => {
    dispatch({ type: "plusProduct", id: id });
  };
  const minusHandler = (id) => {
    dispatch({ type: "minusProduct", id: id });
  };

  const deleteHandler = (id) => {
    dispatch({ type: "deleteProduct", id: id });
  };
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
          <section className={styles.total}>
            <h3>
              {" "}
              Total :{" "}
              {cart.reduce((total, item) => {
                const price = item.price * item.quantity;
                return total + price;
              }, 0)}{" "}
              $
            </h3>
          </section>
          <section className={styles.details}>
            {cart.map((item) => {
              return (
                <div className={styles.product} key={item.id}>
                  <div className={styles.productTitles}>
                    <p>{item.name}</p>
                    <p>$ {item.price * item.quantity}</p>
                  </div>
                  <div className={styles.productControl}>
                    <div className={styles.quantityControl}>
                      <button onClick={() => plusHandler(item.id)}>+</button>
                      <p>{item.quantity}</p>
                      <button onClick={() => minusHandler(item.id)}>-</button>
                    </div>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => deleteHandler(item.id)}
                    >
                      Delete
                    </button>
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
