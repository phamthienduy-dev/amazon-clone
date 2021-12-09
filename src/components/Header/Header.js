import React from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const authenticationHandler = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(user?.email);

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.header__logoLink}>
        <img
          className={styles.header__logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      <div className={styles.header__search}>
        <input className={styles.header__searchInput} />
        <SearchIcon className={styles.header__searchIcon} />
      </div>
      <div className={styles.header__nav}>
        <Link to={!user && "/login"}>
          <div
            className={styles.header__option}
            onClick={authenticationHandler}
          >
            <span className={styles.header__optionLineOne}>
              Hello{" "}
              {user
                ? `${(user?.email).substring(0, (user?.email).indexOf("@"))}`
                : "Guest"}
            </span>
            <span className={styles.header__optionLineTwo}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={user ? "/orders" : "/login"}>
          <div className={styles.header__option}>
            <span className={styles.header__optionLineOne}>Returns</span>
            <span className={styles.header__optionLineTwo}>& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className={styles.header__optionBasket}>
            <ShoppingCartIcon />
            <span
              className={`${styles.header__optionLineTwo} ${styles.header__basketCount}`}
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
