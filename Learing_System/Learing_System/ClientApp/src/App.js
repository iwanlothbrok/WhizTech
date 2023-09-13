import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/style.css';
import './styles/css/custom.css';
import './styles/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import About from './components/about/About'
import Courses from './components/courses/Courses';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact'
import AddCourse from './components/courses/AddCourse';
import Exercise from './components/exercises/Exercises';
import Calendar from './components/calendar/Calendar';
import BlogList from './components/blog/BlogList';
import Language from './components/languages/Language';
import $ from 'jquery'; // Import jQuery

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/add" element={<AddCourse />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/exer/:lang" element={<Exercise />} />
        <Route path="/study/:lang" element={<Language />} />
        <Route path="/cal" element={<Calendar />} />
        <Route path="/blog" element={<BlogList />} />
      </Routes>
    </div>
  );
}
