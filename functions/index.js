const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51K3G8bLpPpf42d4wWDcqkxphOnG7cnw07PZVd88H7tk1sca3fdK92F7xRxz5B0y6vUYYCbtBWM3EqVUUnlv9UgKf00aLiFS2Hu"
);

// const stripe = Stripe(
//   "sk_test_51K1pJKGVBSaep58pR4YqVeqQ1XrJCpiO5CqMqp8NTd12bg2jX5Dv9mrfRnDzT0ck1jUW6IpPkPqJpCIt0LaI8I9K008BK7XRnl"
// );

// API

const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/bob", (request, response) => response.status(200).send("Hi Bob"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-2250a/us-central1/api
