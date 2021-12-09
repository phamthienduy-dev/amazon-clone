import React from "react";

import styles from "./Product.module.css";
import { useStateValue } from "../../context/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasketHandler = () => {
    // dispatch the item into the Data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p className={styles.product__title}>{title}</p>
        <div className={styles.product__rating}>
          {[...Array(rating)].map(() => (
            <p>⭐</p>
          ))}
        </div>
        <p className={styles.product__price}>
          <small>$</small>
          <span>{price}</span>
        </p>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasketHandler}>Add to Basket</button>
    </div>
  );
}

export default Product;
