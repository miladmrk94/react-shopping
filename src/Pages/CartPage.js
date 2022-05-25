import React from "react";
import { Link } from "react-router-dom";
import { useProduct, useProductAction } from "../Components/Context/Context";
import Product from "../Components/Product";
import styles from "../styles/CartPage.module.scss";
import { BiSad } from "react-icons/bi";
import Total from "../Components/Total";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  minusProduct,
  plusProduct,
} from "../Redux/product/productAction";

const Cart = () => {
  //-----context
  // const products = useProduct();
  // const dispatch = useProductAction();
  // const { cart } = products;
  // console.log(cart);

  //-----redux
  const products = useSelector((state) => state.cart);
  console.log(products);
  const dispatch = useDispatch();

  // ----- product Btn handler
  const plusHandler = (id) => {
    // dispatch({ type: "plusProduct", id: id });
    dispatch(plusProduct(id));
  };
  const minusHandler = (id) => {
    // dispatch({ type: "minusProduct", id: id });
    dispatch(minusProduct(id));
  };

  const deleteHandler = (id) => {
    // dispatch({ type: "deleteProduct", id: id });
    dispatch(deleteProduct(id));
  };

  //----- handel total price and offPrice
  const totalPrice = products.reduce((total, item) => {
    const price = item.price * item.quantity;
    return total + price;
  }, 0);
  const totalOffPrice = products.reduce((total, item) => {
    const price = item.offPrice * item.quantity;
    return total + price;
  }, 0);

  // ----- handle cart ( Empty or Exist)
  const cartHandler = (products) => {
    if (!products.length) {
      return (
        <div
          style={{ marginTop: "5rem", color: "#FE5353", textAlign: "center" }}
        >
          <h2>
            Cart is Empty <BiSad />
          </h2>
          <Link to="/">
            <h4
              style={{
                marginTop: "20px",
                color: "blueviolet",
              }}
            >
              Go To Home Page
            </h4>
          </Link>
        </div>
      );
    } else {
      return (
        <div className={styles.box}>
          <div className={styles.total}>
            <div className={styles.totalContinuer}>
              <div className={styles.totalBox}>
                <div className={styles.totalDetails}>
                  <h3>Cart Summery</h3>
                  <br />
                  <p>Total Price : {totalPrice} $</p>
                  <p className={styles.discount}>
                    Total Discount :{totalPrice - totalOffPrice} $
                  </p>
                  <h4>Total Net : {totalOffPrice} $</h4>

                  <div className={styles.boxBtn}>
                    <Link
                      to="/signup?redirect=checkOut"
                      className={styles.link}
                    >
                      <button className={styles.btn}>Check Out</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            {products.map((item) => {
              return (
                <Product
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  offPrice={item.offPrice}
                  discount={item.discount}
                  price={item.price}
                  quantity={item.quantity}
                  addProduct={() => plusHandler(item.id)}
                  minusProduct={() => minusHandler(item.id)}
                  deleteProduct={() => deleteHandler(item.id)}
                />
              );
            })}
          </div>
        </div>
      );
      // return (
      //   <div className={styles.container}>
      //     <section className={styles.total}>
      //       <h2>Cart Summery</h2>
      //       <h4>Total Price : {totalPrice} $</h4>
      //       <h4 className={styles.discount}>
      //         Total Discount :{totalPrice - totalOffPrice} $
      //       </h4>
      //       <h4>Total Net : {totalOffPrice} $</h4>
      //       <Link to="/signup?redirect=checkOut">
      //         <button className={styles.checkOut}>Check Out</button>
      //       </Link>
      //     </section>
      //     <section className={styles.details}>
      //       {cart.map((item) => {
      //         return (
      //           <div className={styles.product} key={item.id}>
      //             <div className={styles.productTitles}>
      //               <p>{item.name}</p>
      //               <p className={styles.price}>
      //                 $ {item.price * item.quantity}
      //               </p>
      //               <p className={styles.discount}>
      //                 {" "}
      //                 {item.discount ? `off:${item.discount}%` : null}
      //               </p>
      //               <p className={styles.offPrice}>
      //                 {item.discount
      //                   ? `$ ${item.offPrice * item.quantity}`
      //                   : null}
      //               </p>
      //             </div>

      //             <Product
      //               key={item.id}
      //               image={item.image}
      //               name={item.name}
      //               price={item.price}
      //               quantity={item.quantity}
      //               addProduct={() => dispatch({ type: "add", id: item.id })}
      //               minusProduct={() =>
      //                 dispatch({ type: "minus", id: item.id })
      //               }
      //               deleteProduct={() =>
      //                 dispatch({ type: "delete", id: item.id })
      //               }
      //             />

      //             <div className={styles.productControl}>
      //               <div className={styles.quantityControl}>
      //                 <button onClick={() => plusHandler(item.id)}>+</button>
      //                 <p>{item.quantity}</p>
      //                 <button onClick={() => minusHandler(item.id)}>-</button>
      //               </div>
      //               <button
      //                 className={styles.deleteBtn}
      //                 onClick={() => deleteHandler(item.id)}
      //               >
      //                 Delete
      //               </button>
      //             </div>
      //             <div className={styles.productImage}>
      //               <img src={item.image} alt={item.name} />
      //             </div>
      //           </div>
      //         );
      //       })}
      //     </section>
      //   </div>
      // );
    }
  };

  //----- Main return Component CartPage
  return cartHandler(products);
};

export default Cart;
