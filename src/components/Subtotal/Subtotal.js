import React from "react";

import styles from "./Subtotal.module.css";

import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../reducer/reducer";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  console.log(basket);

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {`Subtotal (${basket.length} items): `}
              <strong>{value}</strong>
            </p>
            <small className={styles.subtotal__gift}>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
