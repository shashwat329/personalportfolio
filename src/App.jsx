import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './componts/Navbar';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

function App() {
  const names = ["शाश्वत", "shashwat ", "ಶಾಶ್ವತ್","шашват", "沙什瓦特", "சாஷ்வத்"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 1000); 

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [names.length]);

  return (
    <>
  
    <Navbar />
  

     
      <div className='nameSection'>
        <h1 className='name'>{names[currentIndex]}</h1>
        <p>Web and iOS app developer.</p>
      </div>
    </>
  );
}

export default App;
