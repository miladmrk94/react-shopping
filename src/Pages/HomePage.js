import React from "react";
import * as data from "../data";
import styles from "../styles/HomePage.module.scss";
import { useProductAction } from "../Components/Context/Context";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const dispatch = useProductAction();

  const clickHandler = (item) => {
    dispatch({ type: "getProduct", payload: item });
    toast.success("Added to cart");
  };

  return (
    <main className={styles.home}>
      <section className={styles.productList}>
        {data.products.map((item) => {
          return (
            <section key={item.name} className={styles.product}>
              <div className={styles.productImage}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={styles.productTitles}>
                <p>{item.name}</p>
                <p>$ {item.price}</p>
                <button onClick={() => clickHandler(item)}>Add To Cart</button>
                <Toaster />
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
