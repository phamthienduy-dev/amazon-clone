import React from "react";
import Subtotal from "../../components/Subtotal/Subtotal";

import styles from "./Checkout.module.css";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../../components/Product/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__left}>
        <img
          className={styles.checkout__ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout banner"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className={styles.checkout__title}>Your shopping Basket</h2>

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
      <div className={styles.checkout__right}>
        <h2>
          <Subtotal />
        </h2>
      </div>
    </div>
  );
}

export default Checkout;
