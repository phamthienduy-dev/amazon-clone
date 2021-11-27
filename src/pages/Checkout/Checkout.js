import React from "react";

import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__left}>
        <img
          className={styles.checkout__ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout banner"
        />

        <div>
          <h2 className={styles.checkout__title}>Your shopping Basket</h2>
        </div>
      </div>
      <div className={styles.checkout__right}>
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
