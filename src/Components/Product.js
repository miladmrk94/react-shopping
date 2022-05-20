import React from "react";
import styles from "../styles/Products.module.scss";

const Product = ({
  image,
  name,
  price,
  offPrice,
  quantity,
  addProduct,
  minusProduct,
  deleteProduct,
  discount,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.images}>
          <img className={styles.img_product} src={image} alt="product" />
        </div>
        <div className={styles.titles}>
          <h4>{name}</h4>
          {discount ? (
            <div className={styles.discountBox}>
              <h3 className={styles.priceTwo}>{price} $</h3>
              <h4 className={styles.discount}>{discount}$ discount</h4>
            </div>
          ) : null}
        </div>
      </div>

      <div className={styles.buttons}>
        <div className={styles.price}>
          <h2>$ {offPrice}</h2>
        </div>
        <div className={styles.quantityCounter}>
          <h4 className={styles.add} onClick={addProduct}>
            +
          </h4>
          <h4 className={styles.quantity}>{quantity}</h4>
          <h4 className={styles.minus} onClick={minusProduct}>
            -
          </h4>
        </div>
        <div onClick={deleteProduct} className={styles.deleteProduct}>
          <h4 className={styles.deleted}>x</h4>
        </div>
      </div>
    </div>
  );
};

export default Product;
