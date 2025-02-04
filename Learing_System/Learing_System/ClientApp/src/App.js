import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/style.css';
import './styles/css/custom.css';
import './styles/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import About from './components/about/About'
import ErrorPage from './components/ErrorPage';
import Calendar from './components/calendar/Calendar';
import Language from './components/languages/Language';
import ContactWithInformation from './components/ContactWithInformation'
import SelectedBlog from './components/blog/SelectedBlog';
import JoinCourse from './components/contact/JoinCourse';
import PricingPage from './components/pricing/PricingPage';
import Hero from './components/about/Hero';
import Feedback from './components/contact/Feedback';
import DownloadFile from './components/downloading/DownloadFile';
import ProductList from './components/products/ProductList';
import ProductDetails from './components/products/ProductDetails';

import CsharpCourseForm from './components/contact/CsharpCourse';
import SuccessfulPayment from './components/products/SuccessfulPayment'
import MentorshipDescription from './components/products/MentorshipDescription';
import ContactsPage from './components/contactsVladi/ContactsPage';

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
        <Route path='csharpCourse' element={<CsharpCourseForm />} />
        <Route path="/file-js" element={<DownloadFile />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/successfulPaying' element={<SuccessfulPayment />} />

        <Route path='/mentorship' element={<MentorshipDescription />} />
        <Route path='/contactVladi' element={<ContactsPage />} />

      </Routes>

      {/* Define other routes here */}

    </div >
  );
}
