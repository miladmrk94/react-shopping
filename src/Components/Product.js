import React from "react";
import styles from "../styles/Products.module.scss";
import {
  RiArrowUpSFill,
  RiArrowDownSFill,
  RiDeleteBin2Fill,
} from "react-icons/ri";
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
          <h4 className={styles.name}>{name}</h4>
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
          <h2>{offPrice}$</h2>
        </div>
        <div className={styles.quantityCounter}>
          <h4 className={styles.add} onClick={addProduct}>
            <RiArrowUpSFill />
          </h4>
          <h4 className={styles.quantity}>{quantity}</h4>
          <h4 className={styles.minus} onClick={minusProduct}>
            <RiArrowDownSFill />
          </h4>
        </div>
        <div onClick={deleteProduct} className={styles.deleteProduct}>
          <h4 className={styles.deleted}>
            <RiDeleteBin2Fill />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Product;
