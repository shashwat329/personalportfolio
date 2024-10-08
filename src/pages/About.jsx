import React from 'react'
import shashwat from '../assets/shashwat.jpeg';
import appicon from '../assets/iconapp.png'
import icondesign from '../assets/icondesign.png';
import icondev from '../assets/icondev.png'
import '../style/about.css'
export const About = () => {
  return (
    <>
      <h1>ABOUT ME</h1>
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
        <h1>What I'm Doing</h1>
        <div className='ios'>
          <div className="img">
            <img src={appicon} alt="iconapp" />
            <caption>iOS app</caption>
          </div>
          <p>
            Skilled in developing high-end iOS applications for Apple’s design principle App. Proficient in
            Swift, SwiftUI , Cocoa Touch, iOS Frameworks, Core Data, Core Animation, Session. Adept at collaborating
            with cross-functional teams and delivering high-quality code. Also have a deep understanding MVVM, iOS
            back-end services, Application interface guidelines, code versioning tools. Passionate and committed to continuous learning and staying updated with the latest industry trends.
          </p>
        </div>
        <div className='web'>
          <div className="img">
            <img src={icondev} alt="iconapp" />
            <caption>web dev</caption>
          </div>
          <p>
          Skilled in developing responsive, user-friendly websites using HTML, CSS, and JavaScript. Experienced in front-end frameworks like React and back-end technologies such as Node.js.
          Capable of collaborating with design and development teams to deliver clean, scalable code and intuitive user interfaces. Familiar with version control (Git) and agile development methodologies.
          </p>
        </div>
        <div className='design'>
          <div className="img">
            <img src={icondesign} alt="" />
            <caption>web design</caption>
          </div>
          <p>
          Creative and skilled Web and App designing responsive websites and mobile applications. Proficient in tools like Canva, Figma, and Sketch, with a strong focus on user-centered design, usability, and seamless functionality. Adept at collaborating with cross-functional teams to deliver visually appealing and engaging digital solutions. Proven track record in improving user engagement and optimizing app and web interfaces for both iOS and Android platforms
          </p>
        </div>

      </div>
    </>
  )
}
export default About;
