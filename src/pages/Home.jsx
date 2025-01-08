
import React, { useState, useEffect } from 'react';
import Squares from '../components/Squares';
import '../style/Home.css'
const Home = () => {

  const names = ["शाश्वत", "Shashwat ", "ಶಾಶ್ವತ್","шашват", "沙什瓦特", "சாஷ்வத்"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 500); 

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [names.length]);

  return (
    <>
    <div className='nameSection'>
        <h1 className='name'>
        {names[currentIndex]}
        </h1>
        <p>Web and iOS app developer.</p>
    </div>  
    </>
  )
}

export default Home