import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'wowjs/dist/wow.min.js';
import 'owl.carousel/dist/owl.carousel.min.js';
import Footer from '../src/components/layout/Footer';
import NavMenu from '../src/components/layout/NavMenu';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <NavMenu />
    <App />
    <Footer />
  </BrowserRouter>);




