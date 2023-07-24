import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/style.css';
import './styles/custom.css';
import './styles/bootstrap.min.css';
import Home from './components/Home';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
