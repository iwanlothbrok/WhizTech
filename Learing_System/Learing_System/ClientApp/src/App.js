import React from 'react';
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
export default function App() {
  return (
    <div className="App">
      <Router basename="/WhizTech">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactWithInformation />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/exer/:lang" element={<Exercise />} />
          <Route path="/study/:lang" element={<Language />} />
          <Route path="/cal" element={<Calendar />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:blogId" element={<SelectedBlog />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>

    </div>
  );
}
