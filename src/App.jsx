import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Test from './pages/test';
import './App.css';
function App() {


  return (
    <>
  <Router> 
      <Navbar /> 
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
