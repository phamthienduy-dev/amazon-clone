import React, { useState } from "react";

import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.mes));
  };

  const registerHandler = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <Link to="/">
          <img
            className={styles.login__logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          />
        </Link>

        <div className={styles.login__signInContainer}>
          <h1>Sign-in</h1>
          <div>
            <form>
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                className={styles.login__signInButton}
                onClick={signInHandler}
                type="submit"
              >
                Sign In
              </button>
            </form>

            <p>
              By continuing, you agree to Amazon's Fake Clone Conditions of Use
              and Privacy Notice.
            </p>
          </div>
        </div>
        <div className={styles.login__register}>
          <div className={styles.login__divider}>
            <h5>New to Amazon?</h5>
          </div>
          <Link to="/register">
            <button className={styles.login__registerButton}>
              Create your Amazon Clone account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
