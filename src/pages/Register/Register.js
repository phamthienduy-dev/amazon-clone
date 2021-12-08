import React, { useState } from "react";

import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className={styles.register_container}>
      <div className={styles.register}>
        <Link to="/">
          <img
            className={styles.register__logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          />
        </Link>

        <div className={styles.register__registerContainer}>
          <h1>Create account</h1>
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
              <h6>❕Passwords must be at least 6 characters.</h6>

              <button
                className={styles.register__registerButton}
                onClick={registerHandler}
                type="submit"
              >
                Create your Amazon account
              </button>
            </form>

            <p>
              By continuing, you agree to Amazon's Fake Clone Conditions of Use
              and Privacy Notice.
            </p>
          </div>
          <div>
            <div className={styles.register__divider}></div>
          </div>
          <div className={styles.register__signIn}>
            Already have an account? <Link to="/login">Sign-In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
