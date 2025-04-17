import React from 'react'
import '../style/resume.css'
import resumeicon from '../assets/download_resume.png'
import resume from '../../public/Kumar_Shashwat.pdf';
import CircleWithNumber from '../components/CirclewithNumber';
import SkillsSection from '../components/SkillsSection';
import redirect from '../assets/maximize.png'
import healthifyScreenshot from '../assets/Screenshots/Healthify.png'
import patnametroScreenshot from '../assets/Screenshots/Patnametro.png'
import animebookScreenshot from '../assets/Screenshots/animebook.png'
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
            <section className='projectsection'>
              <div>
                <h3> <a href="https://healthifywebsite.vercel.app/">Healthify <img className="redirectionicon" src={redirect} alt="redirecticon" /></a> </h3>
                <h4>Swift, SwiftUI, HealthKit , Firebase , Combine , Gemini API</h4>
                Healthify is a modern fitness app that helps users stay on track with their wellness goals by integrating Apple’s HealthKit for real-time tracking of steps, calories, and workouts. It features a smart AI assistant powered by Gemini’s API, offering personalized fitness, nutrition, and health advice through chat. The app includes an elegant landing page that showcases its features, live previews, and user testimonials. Healthify provides a clean, intuitive UI, adaptive goals, and weekly progress insights. Built using Swift and Firebase, it offers a smart, data-driven approach to personal health and fitness.

                With AI-powered motivation and smart reminders, Healthify becomes your digital fitness coach. Future updates will bring Apple Watch support, dark mode, and social challenges for a more engaging experience.
              </div>
              <img className="projectsectionimg" src={healthifyScreenshot} alt="resumeicon" />
            </section>

            <section className='projectsection'>

              <div>
                <h3> <a href="https://github.com/shashwat329/PMRC">Patna Metro <img className="redirectionicon" src={redirect} alt="redirecticon" /></a> </h3>
                <h4>Swift, SwiftUI, Vapor, Xcode, Firebase, JSON, Payment gateway integration</h4>
                Initiated and developed a smart
                iOS application to streamline metro travel in Patna. Designed a user-friendly interface for seamless route navigation,
                real-time metro updates, and commuter convenience. Implemented Dijkstra’s algorithm to compute the shortest
                and most efficient routes across the metro network. Integrated Combine for reactive state management and Firebase
                to securely store and manage user Metro card details. Built to enhance the transmit experience for daily commuters and
                city visitors by providing a reliable and hassle-free metro journey
              </div>
              <img className="projectsectionimg" src={patnametroScreenshot} alt="resumeicon" />
            </section>
            <section className='projectsection'>
              <div>
                <h3> <a href="https://github.com/shashwat329/animemangatoon">AnimeToon <img className="redirectionicon" src={redirect} alt="redirecticon" /></a> </h3>
                <h4>Swift, SwiftUI,Api Integration,UserDefaults</h4>
                Animetoon – Your Personalized Manga Reading Companion

                Animetoon is a beautifully designed iOS application that brings the world of manga right to your fingertips. Stay up-to-date with the latest manga releases, discover trending series, and enjoy a smooth, immersive reading experience—all in one place.

                With Animetoon, you can:
                <br></br>
                📖 Read the Latest Manga: Access a wide collection of new and popular manga series, updated regularly so you never miss a chapter.
                <br></br>
                ❤️ Save Your Favorites: Bookmark your favorite titles and create a personal manga library for quick access anytime.
                <br></br>
                ⏱️ Track Your Reading Time: Get insights into how much time you spend on each manga, helping you manage your reading habits.
                <br></br>
                🧠 Personalized Stats: View detailed reading analytics such as total hours spent, most-read genres, and daily streaks.
                <br></br>
                🌙 Clean & Minimal UI: Enjoy a distraction-free, dark-mode-supported interface optimized for long reading sessions.
                <br></br>
                Animetoon combines functionality with personalization, making it more than just a manga reader—it's your very own manga diary and tracker.
              </div>
              <img className="projectsectionimg" src={animebookScreenshot} alt="resumeicon" />
            </section>
          </div>
        </div>
      </div >
    </>
  )
}
export default Resume