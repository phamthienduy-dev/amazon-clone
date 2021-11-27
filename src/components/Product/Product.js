import React from "react";

import styles from "./Product.module.css";

function Product({ title, image, price, rating }) {
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p>{title}</p>
        <p className={styles.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product__rating}>
          {[...Array(rating)].map(() => (
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
