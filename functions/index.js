const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JTO0ZSJ3rx5NQLi8w29V561oMDA7cNt5lue5kKLvd71PcvDWVjhPGisjZHaHe3LsB9pyV2KQCjkWFwZwbhQSSIi00zbj56wDM');
//API

//App config
const app = express();

//Middleware

app.use(cors({ origin: true }))
app.use(express.json());

//Api Routes

app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request recieved!!!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
    });
    response.status(201).send
        ({
            clientSecret: paymentIntent.client_secret,
        })
})

//Listen Command!

exports.api = functions.https.onRequest(app);