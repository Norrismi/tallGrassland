const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");


// Make sure to add key ****************
const stripe = require("stripe")(""); 

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello from server !!!!!");
});

app.post('/checkout/create', async (req,res) => {
    const total = req.query.total;

    console.log('Payment Request Revieved !!!!! for the total of  >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })

})

exports.api = functions.https.onRequest(app);

//express app hosted on cloud function
