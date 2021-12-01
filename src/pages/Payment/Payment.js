import React from "react";

import styles from "./Payment.module.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../../components/Product/CheckoutProduct";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className={styles.payment}>
      <div className={styles.payment__container}>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3>Delivery Address</h3>
          </div>
          <div className={styles.payment__address}>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={styles.payment__items}>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3>Payment Method</h3>
          </div>
          <div className={styles.payment__details}></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
