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
              <h3>Experince</h3>
              <p className='experiencetxt'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur autem placeat reprehenderit molestiae labore, mollitia quae itaque dolorem, quis ab modi in porro corrupti voluptas blanditiis excepturi enim necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum explicabo, nihil ipsa distinctio nesciunt eius.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit libero, laboriosam blanditiis quo distinctio maxime, explicabo harum aperiam quod repellendus saepe mollitia consequuntur accusantium nulla aliquid obcaecati ipsum porro..</p>
            </div>
          </div>
        </div>
        <SkillsSection />
        
      </div >
    </>
  )
}
export default Resume