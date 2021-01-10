


//// test to make sure this still works
/// remember I changed the node version in package.json


const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require('dotenv').config()


const stripe = require("stripe")(process.env.STRIPE_SECRET);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());


app.post("/checkout/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Revieved !!!!! for the total of  >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);




