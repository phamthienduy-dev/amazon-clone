import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import styles from "./Orders.module.css";
import { useStateValue } from "../../context/StateProvider";
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";

import Order from "../../components/Order/Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      const ref = collection(db, "users", user?.uid, "orders");
      const orderedOrders = query(ref, orderBy("created", "desc"));
      onSnapshot(orderedOrders, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className={styles.orders}>
      <h1>Your orders</h1>

      <div className={styles.orders__order}>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
