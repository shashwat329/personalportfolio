import React from 'react'
import shashwat from '../assets/shashwat.jpeg';
import '../style/about.css'
export const About = () => {
  return (
    <>
      <h1>About me</h1>
      <div className="content">
        <img src={shashwat} alt="Shashwat" />
        <div className="text">
          <p className='greet'>HELLO 👋 </p>
          <p className='description'>
          My name is <div className='myname'>Kumar Shashwat.</div> <br></br>
          I m a prefinal year Computer science student doing my
            Bachlor of Technology. I m a web and iOS app developer. I love to create apps. I have also done freelancing work.
            My responsibility involves crafting websites that are not only functional and user-friendly but also visually appealing. <br></br>I am a diligent, exceptionally creative, and reliable student committed to improving society. I thrive on fostering a positive atmosphere in my surroundings.
            </p>
        </div>
      </div>
     <div className="do">
      <h1>What I Doing</h1>
      <div className='ios'></div>
      <div className='web'></div>
      <div className='design'></div>

     </div>
    </>
  )
}
export default About;
