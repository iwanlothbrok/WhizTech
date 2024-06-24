import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/style.css';
import './styles/css/custom.css';
import './styles/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import About from './components/about/About'
import ErrorPage from './components/ErrorPage';
import Exercise from './components/exercises/Exercises';
import Calendar from './components/calendar/Calendar';
import BlogList from './components/blog/BlogList';
import Language from './components/languages/Language';
import ContactWithInformation from './components/ContactWithInformation'
import SelectedBlog from './components/blog/SelectedBlog';
import JoinCourse from './components/contact/JoinCourse';
import PricingPage from './components/pricing/PricingPage';
import Hero from './components/about/Hero';
import Feedback from './components/contact/Feedback';
<<<<<<< Updated upstream
import DownloadFile from './components/downloading/DownloadFile';
import ProductList from './components/products/ProductList';
import ProductDetails from './components/products/ProductDetails';

=======
import Checkout from './components/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './Stripe';
>>>>>>> Stashed changes
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactWithInformation />} />
        <Route path="/error" element={<ErrorPage />} />
        {/* <Route path="/exer/:lang" element={<Exercise />} /> */}
        <Route path="/study/:lang" element={<Language />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/blog/:blogId" element={<SelectedBlog />} />
        <Route path="/course" element={<JoinCourse />} />
        <Route path="/offerts" element={<PricingPage />} />
        <Route path="/hero" element={<Hero />} />
        <Route path='/feedback' element={<Feedback />} />
<<<<<<< Updated upstream
        <Route path="/file-js" element={<DownloadFile />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails />} />

=======
        <Route
          path='/checkout'
          element={
            <Elements stripe={stripePromise}>
              <Checkout priceId="57.99" /> {/* Replace with your Stripe price ID */}
            </Elements>
          }
        />
>>>>>>> Stashed changes
      </Routes>

    </div >
  );
}
