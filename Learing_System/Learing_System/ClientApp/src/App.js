import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';

export default function App() {



  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline flex justify-center">
        FIREBASE AUTH
      </h1>
      <Routes>
        <Route path="/" element={<Singin />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}
