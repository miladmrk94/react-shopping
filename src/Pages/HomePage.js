import React from "react";
import * as data from "../data";
import styles from "../styles/HomePage.module.scss";
import { useProductAction, useProduct } from "../Components/Context/Context";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/product/productAction";

const HomePage = () => {
  //----- Context
  // const dispatch = useProductAction();
  // const { cart } = useProduct();

  //-----Redux
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkInCart = (cart, products) => {
    return cart.find((i) => {
      return i.id === products.id;
    });
  };
  const clickHandler = (item) => {
    // dispatch({ type: "getProduct", payload: item });
    dispatch(getProduct(item));
  };

  return (
    <main className={styles.home}>
      <section className={styles.productList}>
        {data.products.map((item) => {
          return (
            <section key={item.name} className={styles.product}>
              <Link to={{ pathname: `/product/${item.name}`, state: { item } }}>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={styles.productImage}
                >
                  <img src={item.image} alt={item.name} />
                  <div className={styles.name}>
                    <p>{item.name}</p>
                  </div>
                </motion.div>
              </Link>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;

{
  /* <section key={item.name} className={styles.product}>
<div className={styles.productImage}>
  <img src={item.image} alt={item.name} />
</div>
<div className={styles.productTitles}>
  <p>{item.name}</p>
  <p>$ {item.price}</p>
  <button onClick={() => clickHandler(item)}>
    {checkInCart(cart, item) ? "In cart" : "Add To Cart"}
  </button>
  <ToastContainer
    position="top-center"
    autoClose={300}
    hideProgressBar
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
  />
</div>
</section> */
}
