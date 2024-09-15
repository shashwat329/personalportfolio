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
          <p>hi!👋 my name is Kumar Shashwat. I m a prefinal year Computer science student doing my
            Bachlor of Technology. I m a web and iOS app developer. I love to create apps. I have also done freelancing work.
            My responsibility involves crafting websites that are not only functional and user-friendly but also visually appealing. I am a diligent, exceptionally creative, and reliable student committed to improving society. I thrive on fostering a positive atmosphere in my surroundings.
          </p>
        </div>
      </div>
     <div className="do">
      <h1>what i do</h1>
     </div>
    </>
  )
}
export default About;
