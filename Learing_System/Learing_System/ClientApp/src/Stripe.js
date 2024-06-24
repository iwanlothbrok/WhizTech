// src/Stripe.js
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('STRIPE PUBLISHABLE KEY'); // Replace with your Stripe publishable key
export default stripePromise;
