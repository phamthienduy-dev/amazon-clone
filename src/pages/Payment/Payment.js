import React, { useState, useEffect } from "react";

import styles from "./Payment.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../../components/Product/CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer/reducer";
import axios from "axios";
import { db } from "../../firebase";
import { doc, setDoc, collection } from "firebase/firestore";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `https://us-central1-clone-2250a.cloudfunctions.net/api/payments/create?total=${
          getBasketTotal(basket) * 100
        }`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const submitHandler = async (e) => {
    const orders = {};

    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setDoc(
          doc(db, "users", user?.uid, "orders", paymentIntent.id),
          // doc(db, "order", paymentIntent.id),
          {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          }
        );

        // query(
        //   collection("users")
        //     .doc(user?.uid)
        //     .collection("orders")
        //     .doc(paymentIntent.id)
        //     .set({
        //       basket: basket,
        //       amount: paymentIntent.amount,
        //       created: paymentIntent.created,
        //     })
        // );

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: "EMPTY_BASKET" });

        navigate("/orders");
      });
  };

  const changeHandler = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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
            <small>You can use 42 repeatedly for testing.</small>
          </div>
          <div className={styles.payment__details}>
            <form onSubmit={submitHandler}>
              <CardElement onChange={changeHandler} />

              <div className={styles.payment__priceContainer}>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
