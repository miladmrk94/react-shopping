import React from "react";
import styles from "../styles/ProductPage.module.scss";
import { useProductAction, useProduct } from "./../Components/Context/Context";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Slider from "../Components/Slider";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProduct } from "../Redux/product/productAction";

const ProductPage = ({ location }) => {
  //---- Context
  // const dispatch = useProductAction();
  // const { cart } = useProduct();

  //----- Redux
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

    toast.success(item.name, {
      position: "top-center",
      autoClose: 300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const data = [location.state.item];
  console.log(data);
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <section key={item.id} className={styles.cart}>
            <div className={styles.image}>
              {/* <img src={item.image} alt={item.name} /> */}
              <Slider image={item.image} className={styles.img} />
            </div>
            <div className={styles.content}>
              <div className={styles.boxOne}>
                <p className={styles.name}>{item.name}</p>
                {item.discount ? (
                  <>
                    <p className={styles.price}>${item.price}</p>
                    <p className={styles.offPrice}>${item.offPrice}</p>
                    <p className={styles.discount}>${item.discount} save!</p>
                  </>
                ) : (
                  <p className={styles.offPriceTwo}>${item.offPrice}</p>
                )}
              </div>
              {item.type === "shoes" ? (
                <div className={styles.boxOne}>
                  <p className={styles.size}>Size:</p>
                  <input
                    className={styles.radio}
                    type="radio"
                    id="37"
                    name="selector"
                  />
                  <label htmlFor="37">37</label>
                  <input
                    className={styles.radio}
                    type="radio"
                    id="38"
                    name="selector"
                  />
                  <label htmlFor="38">38</label>
                  <input
                    className={styles.radio}
                    type="radio"
                    id="39"
                    name="selector"
                  />
                  <label htmlFor="39">39</label>
                  <input
                    className={styles.radio}
                    type="radio"
                    id="40"
                    name="selector"
                  />
                  <label htmlFor="40">40</label>
                  <input
                    className={styles.radio}
                    type="radio"
                    id="41"
                    name="selector"
                  />
                  <label htmlFor="41">41</label>
                  <input
                    className={styles.radio}
                    type="radio"
                    id="42"
                    name="selector"
                  />
                  <label htmlFor="42">42</label>
                </div>
              ) : (
                <div className={styles.boxOne}>
                  <p className={styles.size}>Size:</p>
                  <input
                    className={styles.radio}
                    type="radio"
                    id="S"
                    name="selector"
                  />
                  <label htmlFor="S">S</label>
                  <input
                    className={styles.radio}
                    type="radio"
                    id="M"
                    name="selector"
                  />
                  <label htmlFor="M">M</label>
                  <input
                    className={styles.radio}
                    type="radio"
                    id="L"
                    name="selector"
                  />
                  <label htmlFor="L">L</label>
                </div>
              )}

              <div className={styles.boxOne}>
                <h2>{item.feat}</h2>

                {item.description.map((i, index) => {
                  return (
                    <div key={index} className={styles.boxTwo}>
                      <ul>
                        <li style={{ listStyleType: "disc" }}>
                          <p>{i.title}</p>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className={styles.boxBtn}>
                <Link to="/cart" className={styles.link}>
                  <button className={styles.btn}>Go To Cart</button>
                </Link>

                <button
                  className={styles.btnInCart}
                  onClick={() => clickHandler(item)}
                >
                  {checkInCart(cart, item) ? "In cart" : "Add To Cart"}
                </button>
              </div>
              <ToastContainer />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductPage;
