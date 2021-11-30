import React from "react";

import styles from "./CheckoutProduct.module.css";
import { useStateValue } from "../../context/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [state, dispatch] = useStateValue();

  const removeProductHandler = () => {
    console.log("Clicked!");
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };

  return (
    <div className={styles.checkoutProduct}>
      <img className={styles.checkoutProduct__image} src={image} alt={title} />
      <div className={styles.checkoutProduct__info}>
        <p className={styles.checkoutProduct__title}>{title}</p>
        <p className={styles.checkoutProduct__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.checkoutProduct__rating}>
          {[...Array(rating)].map(() => (
            <p>⭐</p>
          ))}
        </div>
        <button onClick={removeProductHandler}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
