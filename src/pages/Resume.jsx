import React from 'react'
import '../style/resume.css'
import resumeicon from '../assets/download_resume.png'
import resume from "../assets/resume.pdf";
import CircleWithNumber from '../components/CirclewithNumber';
import SkillsSection from '../components/SkillsSection';


const Resume = () => {
  return (
    <>
      <div className="box">
        {/* <h1>RESUME</h1> */}
        <div className="head">
          <h2>RESUME</h2>
          <div>
            <a href={resume} download="shashwat_resume"><img src={resumeicon} alt="resumeicon" /></a>
          </div>
        </div>
        <div className="content resumemain">
          <div className="education">
            <div className="subheading">
              <h3>Education</h3>
            </div>
            <div className="edu">
              <CircleWithNumber count={0} />
              <div className="eduinfo">
                ABES ENGINNERING COLLEGE
                <p>2022-2024</p>
              </div>
            </div>
            <div className="edu">
              <CircleWithNumber count={1} />
              <div className="eduinfo">
                Trinity Global School
                <p>2022-2024</p>
              </div>
            </div>
            <div className="edu">
              <CircleWithNumber count={2} />
              <div className="eduinfo">
                St Mary High School
                <p>2022-2024</p>
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="subheading">
              <h3>Projects</h3>
              <p className='experiencetxt'>
                <h3><a href="">WEATHERAPP</a></h3>Swift, SwiftUI, openweathermap, Xcode, Json, Api integration. <br />
                WeatherApp is a sleek, intuitive weather application designed to keep users informed about current weather conditions
                and forecasts. Built with Swift, SwiftUI, and leveraging the OpenWeatherMap API, WeatherWise exemplifies modern
                iOS app development, this app provides real-time weather updates and detailed forecasts, all through a beautiful and
                user-friendly interface. <br /> <br/>
                <h3><a href="">GUESS THE FLAG</a> </h3>Swift,UIKIT,Xcode,Storyboard,Cocoa Touch <br/>
                ”Guess the Flag” is an engaging and educational app designed to test and improve your knowledge of world flags. With an
                intuitive interface and a vast collection of flags from around the globe, this app provides an entertaining way to learn
                about different countries and their flags.Built with Swift, UIKit, Xcode, and Storyboard.
              </p>
            </div>
          </div>
        </div>
        <SkillsSection />

      </div >
    </>
  )
}
export default Resume