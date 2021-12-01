import React, { useEffect } from "react";

import styles from "./App.module.css";

import Header from "../src/components/Header/Header";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Payment from "./pages/Payment/Payment";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "././context/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
