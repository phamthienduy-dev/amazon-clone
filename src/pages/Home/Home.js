import React from "react";
import { nanoid } from "nanoid";

import styles from "./Home.module.css";
import Product from "../../components/Product/Product";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <img
          className={styles.home__image}
          src="https://m.media-amazon.com/images/I/51upXzq22FL._SX1500_.jpg"
          alt="Home"
        />

        <div className={styles.home__row}>
          <Product
            id={nanoid()}
            title='Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6" FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard'
            price={794.99}
            image="https://m.media-amazon.com/images/I/71m03KItMZL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id={nanoid()}
            title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)"
            price={118.99}
            image="https://m.media-amazon.com/images/I/51flYY25c3L._AC_SL1000_.jpg"
            rating={4}
          />
        </div>

        <div className={styles.home__row}>
          <Product
            id={nanoid()}
            title="NETGEAR Wi-Fi Range Extender EX3700 - Coverage Up to 1000 Sq Ft and 15 Devices with AC750 Dual Band Wireless Signal Booster & Repeater (Up to 750Mbps Speed), and Compact Wall Plug Design"
            price={18.98}
            image="https://m.media-amazon.com/images/I/61z5oOk5fzL._AC_SL1350_.jpg"
            rating={4}
          />
          <Product
            id={nanoid()}
            title="Nintendo Joy-Con (L/R) - Neon Red/Neon Blue"
            price={95.06}
            image="https://m.media-amazon.com/images/I/61pNxvhhXlL._SL1200_.jpg"
            rating={5}
          />
          <Product
            id={nanoid()}
            title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT"
            price={51.19}
            image="https://m.media-amazon.com/images/I/71q-KKcG4aL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className={styles.home__row}>
          <Product
            id={nanoid()}
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz"
            price={917.97}
            image="https://m.media-amazon.com/images/I/71bi86vSqyL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
