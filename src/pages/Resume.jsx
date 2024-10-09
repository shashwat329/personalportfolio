import React from 'react'
import '../style/resume.css'
import resumeicon from '../assets/download_resume.png'
import resume from "../assets/resume.pdf";
import CircleWithNumber from '../components/CirclewithNumber';
import SkillsSection from '../components/SkillsSection';
import redirect from '../assets/maximize.png'

const Resume = () => {
  return (
    <>
      <div className="box">
        {/* <h1>RESUME</h1> */}
        <div className="head">
          <h1>RESUME</h1>
          <div>
            <a href={resume} download="shashwat_resume"><img src={resumeicon} alt="resumeicon" /></a>
          </div>
        </div>
        <div className="resumemain">
          <div className="education">
          <h2>Education</h2>
            <div className="edu">
              <CircleWithNumber count={0} />
              <div className="eduinfo">
                ABES ENGINNERING COLLEGE
                <p>2022-2026</p>
              </div>
            </div>
            <div className="edu">
              <CircleWithNumber count={1} />
              <div className="eduinfo">
                Trinity Global School
                <p>2018-2019</p>
              </div>
            </div>
            <div className="edu">
              <CircleWithNumber count={2} />
              <div className="eduinfo">
                St Mary High School
                <p>2007-2018</p>
              </div>
            </div>
          </div>
          {/* put the componet beloew me */}
          <SkillsSection />
        </div>

        {/* put the div section below me */}
        <div className="project">
        <h1>Projects</h1>
          <div className="subheading">
            
            <p className='projectetxt'>
              <h3> <a href="https://github.com/shashwat329/swiftprojects"> WEATHERAPP<img src={redirect} alt="redirecticon" /></a> </h3>
               <h4>Swift, SwiftUI, openweathermap, Xcode, Json, Api integration.</h4>
              WeatherApp is a sleek, intuitive weather application designed to keep users informed about current weather conditions
              and forecasts. Built with Swift, SwiftUI, and leveraging the OpenWeatherMap API, WeatherWise exemplifies modern
              iOS app development, this app provides real-time weather updates and detailed forecasts, all through a beautiful and
              user-friendly interface. <br /> <br />
              <h3> <a href="https://github.com/shashwat329/swiftprojects">GUESS THE FLAG<img src={redirect} alt="redirecticon" /> </a> </h3> 
              <h4>Swift,UIKIT,Xcode,Storyboard,Cocoa Touch</h4>
              ”Guess the Flag” is an engaging and educational app designed to test and improve your knowledge of world flags. With an
              intuitive interface and a vast collection of flags from around the globe, this app provides an entertaining way to learn
              about different countries and their flags.Built with Swift, UIKit, Xcode, and Storyboard.
            </p>
          </div>
        </div>
      </div >
    </>
  )
}
export default Resume