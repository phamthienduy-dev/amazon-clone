import React from "react";

import styles from "./Footer.module.css";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Footer() {
  return (
    <>
      <button className={styles.footer__button}>Back to top</button>
      <div className={styles.footer}>
        <div className={styles.footer__columns}>
          <div className={styles.footer__column}>
            <div className={styles.footer__columnTitle}>Get to Know Us</div>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
            </ul>
          </div>

          <div className={styles.footer__column}>
            <div className={styles.footer__columnTitle}>Make Money with Us</div>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>›See More Make Money with Us</li>
            </ul>
          </div>

          <div className={styles.footer__column}>
            <div className={styles.footer__columnTitle}>
              Amazon Payment Products
            </div>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
              <li>Amazon Business Card</li>
            </ul>
          </div>

          <div className={styles.footer__column}>
            <div className={styles.footer__columnTitle}>Let Us Help You</div>
            <ul>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Amazon Assistant</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
