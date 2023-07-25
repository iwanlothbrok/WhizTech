import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/style.css';
import './styles/custom.css';
import './styles/bootstrap.min.css';
import Home from './components/home/Home';
import About from './components/about/About'
import NavMenu from './components/home/NavMenu';
import Courses from './components/courses/Courses';

export default function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}
