import React from "react";
import { Link } from "react-router-dom";
import { useProduct, useProductAction } from "../Components/Context/Context";
import styles from "../styles/CartPage.module.scss";
const Cart = () => {
  const products = useProduct();
  const dispatch = useProductAction();
  const { cart } = products;
  console.log(cart);

  // ----- product Btn handler
  const plusHandler = (id) => {
    dispatch({ type: "plusProduct", id: id });
  };
  const minusHandler = (id) => {
    dispatch({ type: "minusProduct", id: id });
  };

  const deleteHandler = (id) => {
    dispatch({ type: "deleteProduct", id: id });
  };

  //----- handel total price and offPrice
  const totalPrice = cart.reduce((total, item) => {
    const price = item.price * item.quantity;
    return total + price;
  }, 0);
  const totalOffPrice = cart.reduce((total, item) => {
    const price = item.offPrice * item.quantity;
    return total + price;
  }, 0);

  // ----- handle cart ( Empty or Exist)
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
            <h2>Cart Summery</h2>
            <h4>Total Price : {totalPrice} $</h4>
            <h4 className={styles.discount}>
              Total Discount :{totalPrice - totalOffPrice} $
            </h4>
            <h4>Total Net : {totalOffPrice} $</h4>
            <Link to="/checkOut">
              <button className={styles.checkOut}>Check Out</button>
            </Link>
          </section>
          <section className={styles.details}>
            {cart.map((item) => {
              return (
                <div className={styles.product} key={item.id}>
                  <div className={styles.productTitles}>
                    <p>{item.name}</p>
                    <p className={styles.price}>
                      $ {item.price * item.quantity}
                    </p>
                    <p className={styles.discount}>
                      {" "}
                      {item.discount ? `off:${item.discount}%` : null}
                    </p>
                    <p className={styles.offPrice}>
                      {item.discount
                        ? `$ ${item.offPrice * item.quantity}`
                        : null}
                    </p>
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

  //----- Main return Component CartPage
  return cartHandler(cart);
};

export default Cart;
