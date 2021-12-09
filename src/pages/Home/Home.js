import React from "react";
import { nanoid } from "nanoid";

import styles from "./Home.module.css";
import Product from "../../components/Product/Product";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        {/* <img
            src="https://m.media-amazon.com/images/I/51upXzq22FL._SX1500_.jpg"
            alt="Home"
          /> */}
        <HomeSlider />

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
          <Product
            id={nanoid()}
            title="Certified Refurbished Kindle Paperwhite – (previous generation - 2018 release) Waterproof with 2x the Storage – Ad-Supported"
            price={89.97}
            image="https://m.media-amazon.com/images/I/61eCm0dNo3L._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className={styles.home__row}>
          <Product
            id={nanoid()}
            title="WYZE Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera, 2-Way Audio, Works with Alexa, Google Assistant, and IFTTT"
            price={35.98}
            image="https://m.media-amazon.com/images/I/61DJRLNgyWL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id={nanoid()}
            title="AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor"
            price={524.0}
            image="https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg"
            rating={5}
          />
          <Product
            id={nanoid()}
            title="ASUS ROG Strix B550-F Gaming (WiFi 6) AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)"
            price={194.99}
            image="https://m.media-amazon.com/images/I/81x069mwcbL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
