// functions/index.js

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('STRIPE SECRET KEY'); // Replace with your Stripe secret key

admin.initializeApp();
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const { priceId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: 'https://yourdomain.com/success', // Replace with your success URL
            cancel_url: 'https://yourdomain.com/cancel', // Replace with your cancel URL
        });

        res.status(200).json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

exports.api = functions.https.onRequest(app);
